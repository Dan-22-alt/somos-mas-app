import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchOrganizationData } from '../../../services/homeService';
import { MainSlide } from '../components/HomeTemplates/MainSlide';
import { Section } from '../components/HomeTemplates/Section';
import { Welcome } from '../components/Welcome';
import { UseRequest } from '../useRequest';

export const HomePage = () => {
  const { news, testimonials } = UseRequest();
  const [homeData, setHomeData] = useState(null);
  const admin = true;

  const state = useSelector((state) => state);

  useEffect(() => {
    fetchOrganizationData().then((data) => setHomeData(data));
  }, []);

  return (
    <>
      {/* {admin && <HomeEditForm />} */}
      {/* <LogOutButt /> */}

      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      <MainSlide />
      <Welcome text={homeData?.welcome_text} />
      <Section title="Últimas Novedades" state={news} />
      <Section title="Testimonios" state={testimonials} />
    </>
  );
};
