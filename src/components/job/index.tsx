import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Tabs } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCity } from '@/store/slice/filtersSlice';
import { ListJob } from './listJob';
import Search from './Search';
import Skills from './skills';
import Title from './title';
import styles from './styles.module.css';

const cityMap: Record<string, string> = {
  '1': 'moscow',
  '2': 'petersburg',
};

export default function JobPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams<{ city?: string }>();
  
  const city = useAppSelector((state) => state.filters.city);
  const [activeTab, setActiveTab] = useState<string>('all');


  useEffect(() => {
    if (params.city) {
      const tabValue = Object.keys(cityMap).find(key => cityMap[key] === params.city);
      if (tabValue) {
        setActiveTab(tabValue);
        dispatch(setCity(params.city));
      }
    }
  }, [params.city, dispatch]);


  const handleTabChange = (value: string | null) => {
    if (!value) return;

    const newValue = activeTab === value ? 'all' : value;
    setActiveTab(newValue);

    if (newValue === 'all') {
      dispatch(setCity('all'));
      navigate('/vacancies');
    }  else {
      const citySlug = cityMap[newValue];
      dispatch(setCity(citySlug));
      navigate(`/vacancies/${citySlug}`);
    }
  };

  useEffect(() => {
    if(city === 'all') {
      setActiveTab('all')
    }
  }, [city])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title />
        <Search />
      </div>
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <Skills />
        </div>
        <div className={styles.rightColumn}>
          <Tabs value={activeTab === 'all' ? null : activeTab} onChange={handleTabChange}>
            <Tabs.List className={styles.tabsList}>
              <Tabs.Tab
                value="1"
                className={`${styles.tab} ${activeTab === '1' ? styles.tabActive : ''}`}
              >
                Москва
              </Tabs.Tab>
              <Tabs.Tab
                value="2" size={14}
                className={`${styles.tab} ${activeTab === '2' ? styles.tabActive : ''}`}
              >
                Санкт-Петербург
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
          <ListJob />
        </div>
      </div>
    </div>
  );
}
