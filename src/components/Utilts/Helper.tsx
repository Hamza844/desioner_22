// utils/helper.ts

import { API_ROUTES, BASE_URL } from "../APIRoutes/APIRoutes";

// Helper function to fetch data
// Define the type for the metadata

// Create a reusable function to fetch metadata
export const fetchMetaData = async (type: string) => {
  const res = await fetch(
    `${BASE_URL}/meta-tags/${API_ROUTES.GET_METATAG}?type=${type}`
  );

  const data = await res.json();
  return data?.data[0];
};

export const fetchData = async (route: string) => {
  try {
    const response = await fetch(route);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
export const fetchHomeData = async (lang: any) => {
  const response = await fetchData(
    `${BASE_URL}/home/${lang}/${API_ROUTES.GET_HOMESECTION}`
  );
  return response;
};
export const fetchUiStore = async (lang: any) => {
  const response = await fetchData(
    `${BASE_URL}/ui-store/${lang}/${API_ROUTES.GET_UISTORE}`
  );
  return response;
};

export const fetchTeam = async (lang: any) => {
  const response = await fetchData(
    `${BASE_URL}/team/${lang}/${API_ROUTES.GET_TEAM}`
  );
  return response;
};
export const fetchTestimonail = async (lang: any) => {
  const response = await fetchData(
    `${BASE_URL}/testimonials/${API_ROUTES.GET_TESTIMONAIL}`
  );
  return response;
};

export const fetchOurWork = async (lang: any) => {
  const response = await fetchData(
    `${BASE_URL}/our-work/${lang}/${API_ROUTES.GET_OURWORK}`
  );
  return response;
};

export const fetchAbout = async (lang: any) => {
  const response = await fetchData(
    `${BASE_URL}/about/${lang}/${API_ROUTES.GET_ABOUT}`
  );
  return response;
};

export const fetchServices = async (lang: any, type: string) => {
  const response = await fetchData(
    `${BASE_URL}/service/${lang}/${API_ROUTES.GET_SERVICES}?keyword=${type}`
  );
  console.log("Service Data=>", response);
  return response;
};

export const fetchFooterData = async (lang: any) => {
  const response = await fetchData(
    `${BASE_URL}/footer/${lang}/${API_ROUTES.GET_FOOTER}`
  );
  return response;
};

export const fetchWebsiteLogo = async () => {
  const response = await fetchData(`${BASE_URL}/home/${API_ROUTES.GET_LOGOS}`);
  return response;
};

export const fetchArticle = async (lang: any) => {
  const response = await fetchData(
    `${BASE_URL}/articles/${lang}/${API_ROUTES.GET_ARTICLE}`
  );
  return response;
};

export const fetchFaqs = async (lang: any, type: any) => {
  const response = await fetchData(
    `${BASE_URL}/faqs/${lang}/${API_ROUTES.GET_FAQS}?type=${type}`
  );
  return response;
};
export const fetchHeader = async (lang: any, type: any) => {
  const response = await fetchData(
    `${BASE_URL}/home/${lang}/${API_ROUTES.GET_HEADER}?type=${type}`
  );
  return response;
};

export const fetchServiceSliders = async (lang: any, type: any) => {
  const response = await fetchData(
    `${BASE_URL}/home/${lang}/${API_ROUTES.GET_SLIDERS}?type=${type}`
  );
  return response;
};
