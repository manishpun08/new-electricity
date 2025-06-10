interface Endpoints {
  organizationSetting: string;
  navLinks: string;
  navNews: string;
  popup: string;

  homeHero: string;
  homeImpService: string;
  about: string;

  homeTeam: string;
  chairperson: string;
  subcategory: string;
  document: string;
  actRule: string;
  categoryDetail: string;
  actDetail: string;

  contact: string;
  photoBanner: string;
  photoGallery: string;
  photoDetail: string;
  videoList: string;

  applicationStatus: string;
  soaDetail: string;
  faq: string;

  eFilingData: string;
  createComplain: string;

  chatbot: {
    register: string;
    chatCategory: string;
    subCategory: string;
    chatAnswer: string;
  };

  footer: {
    affiliatedOrganization: string;
    importantLinks: string;
  };

  breadcrumb: string;
}

export const endpoints: Endpoints = {
  organizationSetting: "/organization/list/",
  navLinks: "/maincategory/list/",
  navNews: "/news/list/",
  popup: "/popup/list/",

  homeHero: "/homepage/list/",
  homeImpService: "/services/list",
  about: "/about/list/",

  homeTeam: "/team/list/",
  chairperson: "/team/chairperson-message/list/",
  document: "/document/list/",

  subcategory: "/maincategory/detail/",

  actRule: "/subcategory/documentlist/",

  categoryDetail: "/subcategory/detail",

  actDetail: "/document/detail",

  contact: "/contact/create/",

  photoBanner: "/gallery/banner/list/",
  photoGallery: "/gallery/list/",
  photoDetail: "/gallery/detail",
  videoList: "/video/list/",

  applicationStatus: "/applicationstatus/list/",
  soaDetail: "/applicationstatus/detail",
  faq: "/faq/list/",

  eFilingData: "/efiling/list/",
  createComplain: "/complain/create/",

  // Chatbot
  chatbot: {
    register: "/user/register/?lang=np",
    chatCategory: "/chat/category/list/",
    subCategory: "/chat/subCategory/list/",
    chatAnswer: "chat/answer/suggestion/get/",
  },

  breadcrumb: "/herosection/list/",

  footer: {
    affiliatedOrganization: "/link/affiliated-organizations/",
    importantLinks: "/link/important-links/",
  },
};

export const BASE_API_URL = "http://electricity.pokharauae.com/api/v1";

export const BASE_CHATBOT_URL = "http://192.168.1.97:8001/api/v1";
// export const BASE_SOCKET_URL = process.env.NEXT_PUBLIC_CHATBOT_SOCKET_URL;
