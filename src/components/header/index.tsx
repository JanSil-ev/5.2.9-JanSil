import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Avatar } from '@mantine/core';
import hh from '../image/hh.png';
import styles from './styles.module.css';
import { useEffect } from 'react';
import { fetchJob } from '@/store/slice/JobSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCity } from '@/store/slice/filtersSlice';
import { setQuery } from '@/store/slice/searchSlice';
import { removeSkill, renameSkills, setSkills } from '@/store/slice/skillsSlice';

export const Header = () => {
 const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const skills = useAppSelector((state) => state.skills.skills);

  const handleVacanciesClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Перенаправляем на страницу /vacancies, если мы не на ней
    if (location.pathname !== '/vacancies') {
      navigate('/vacancies');
    }

    // Делаем запрос с базовыми начальными значениями
    dispatch(setCity('all'));
    dispatch(setQuery(''));
    dispatch(renameSkills())
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={hh} alt="logo" width={30} />
        <a className={styles.logo}>.FrontEnd</a>
      </div>

      <nav className={styles.nav}>
        <Link to="/vacancies" className={`${styles.link} ${styles.active}`} onClick={handleVacanciesClick}>
          Вакансии FE <span className={styles.dot}></span>
        </Link>

        <Link to="/about" className={styles.link}>
          <Avatar radius="xl" />
          <p>Обо мне</p>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
