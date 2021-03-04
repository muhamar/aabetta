import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView, FlatList } from 'react-native';
import { Block } from 'galio-framework';
import LelangCard from '../components/LelangCard';

import LoadingScreen from './LoadingScreen';
import { fetchLelang } from '../store/actions/lelang';

const renderItem = ({ item }) => {
  return <LelangCard item={item} />;
};

const HomeScreen = () => {
  const lelang = useSelector((state) => state.lelang);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    const fn = async () => {
      try {
        await dispatch(fetchLelang());
      } catch (e) {
        console.log(e.message);
      }
      setRefreshing(false);
    };
    fn();
  }, [dispatch]);

  useEffect(() => {
    if (!lelang.fetched) {
      onRefresh();
    }
  }, [onRefresh, lelang]);

  if (!lelang.fetched) {
    return <LoadingScreen />;
  }
  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={(item) => item}
        data={lelang.filtered}
        numColumns={2}
        renderItem={renderItem}
        style={{ padding: 5 }}
        refreshing={refreshing}
        onRefresh={onRefresh}
        ListFooterComponent={() => {
          return <Block height={10} />;
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
