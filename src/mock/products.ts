import type { Product } from '../types';

import asset01 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_01_1035dd3e31a9.png';
import asset02 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_02_635a7db1bc7c.png';
import asset21 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_21_be605dba59fa.png';
import asset22 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_22_fc7a9002813f.png';
import asset23 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_23_3d59a55e4cf3.png';
import asset24 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_24_b169f7ce24ef.png';
import asset25 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_25_c9168ddbe608.png';
import asset26 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_26_9aa8ab1c50f4.png';
import asset27 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_27_38fa2c68b07a.jpg';
import asset28 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_28_0ccfd02dfe29.jpg';
import asset29 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_29_e259bc1b5a9f.jpg';
import asset30 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_30_ae8d1cb7dc12.jpg';
import asset31 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_31_9872eb025040.jpg';

import religiousHero from '@/assets/foundation/religious.jpg';
import downloadImg from '@/assets/foundation/download.jpg';
import download1 from '@/assets/foundation/download (1).jpg';
import download2 from '@/assets/foundation/download (2).jpg';
import download3 from '@/assets/foundation/download (3).jpg';
import download4 from '@/assets/foundation/download (4).jpg';
import download5 from '@/assets/foundation/download (5).jpg';
import download6 from '@/assets/foundation/download (6).jpg';
import download7 from '@/assets/foundation/download (7).jpg';
import download8 from '@/assets/foundation/download (8).jpg';
import download9 from '@/assets/foundation/download (9).jpg';
import download10 from '@/assets/foundation/download (10).jpg';
import download11 from '@/assets/foundation/download (11).jpg';
import download12 from '@/assets/foundation/download (12).jpg';
import download13 from '@/assets/foundation/download (13).jpg';
import download14 from '@/assets/foundation/download (14).jpg';
import download15 from '@/assets/foundation/download (15).jpg';

const REAL_IMAGES = [
  asset01, asset02, asset21, asset22, asset23, asset24, asset25, asset26,
  asset27, asset28, asset29, asset30, asset31, religiousHero, downloadImg,
  download1, download2, download3, download4, download5, download6, download7,
  download8, download9, download10, download11, download12, download13,
  download14, download15
];

const rawProducts: Product[] = [
  {
    "id": "p1",
    "slug": "calendar-desk-calendars-model-1",
    "sku": "CAL-DES-1001",
    "name": "Premium Desk Calendars Model 1",
    "categoryId": "c2",
    "material": "Matte Paper",
    "paperGsm": 170,
    "printingType": "Digital Printing",
    "size": "A4",
    "orientation": "Landscape",
    "moq": 150,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "desk-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": false,
    "rating": 4.7,
    "reviewsCount": 126,
    "thumbnail": "/assets/products/thumb-1.jpg",
    "hoverImage": "/assets/products/hover-1.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-1.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-1.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality desk calendars suitable for all your needs. It features exceptional binding and Digital Printing finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 155
  },
  {
    "id": "p2",
    "slug": "calendar-corporate-calendars-model-2",
    "sku": "CAL-COR-1002",
    "name": "Premium Corporate Calendars Model 2",
    "categoryId": "c3",
    "material": "Recycled Paper",
    "paperGsm": 210,
    "printingType": "UV Coating",
    "size": "A5",
    "orientation": "Square",
    "moq": 200,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "corporate-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": true,
    "rating": 4.5,
    "reviewsCount": 127,
    "thumbnail": "/assets/products/thumb-2.jpg",
    "hoverImage": "/assets/products/hover-2.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-2.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-2.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality corporate calendars suitable for all your needs. It features exceptional binding and UV Coating finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 160
  },
  {
    "id": "p3",
    "slug": "calendar-religious-calendars-model-3",
    "sku": "CAL-REL-1003",
    "name": "Premium Religious Calendars Model 3",
    "categoryId": "c4",
    "material": "Premium Glossy",
    "paperGsm": 250,
    "printingType": "Foil Stamping",
    "size": "Custom",
    "orientation": "Portrait",
    "moq": 100,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "religious-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": false,
    "rating": 4.5,
    "reviewsCount": 33,
    "thumbnail": "/assets/products/thumb-3.jpg",
    "hoverImage": "/assets/products/hover-3.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-3.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-3.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality religious calendars suitable for all your needs. It features exceptional binding and Foil Stamping finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 165
  },
  {
    "id": "p4",
    "slug": "calendar-wall-calendars-model-4",
    "sku": "CAL-WAL-1004",
    "name": "Premium Wall Calendars Model 4",
    "categoryId": "c1",
    "material": "Art Paper",
    "paperGsm": 290,
    "printingType": "Offset Printing",
    "size": "A3",
    "orientation": "Landscape",
    "moq": 150,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "wall-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": true,
    "corporateEligible": true,
    "sampleAvailable": true,
    "rating": 4.3,
    "reviewsCount": 105,
    "thumbnail": "/assets/products/thumb-4.jpg",
    "hoverImage": "/assets/products/hover-4.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-4.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-4.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality wall calendars suitable for all your needs. It features exceptional binding and Offset Printing finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 170
  },
  {
    "id": "p5",
    "slug": "calendar-desk-calendars-model-5",
    "sku": "CAL-DES-1005",
    "name": "Premium Desk Calendars Model 5",
    "categoryId": "c2",
    "material": "Matte Paper",
    "paperGsm": 130,
    "printingType": "Digital Printing",
    "size": "A4",
    "orientation": "Square",
    "moq": 200,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "desk-calendars"
    ],
    "featured": true,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": false,
    "rating": 4.3,
    "reviewsCount": 133,
    "thumbnail": "/assets/products/thumb-5.jpg",
    "hoverImage": "/assets/products/hover-5.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-5.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-5.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality desk calendars suitable for all your needs. It features exceptional binding and Digital Printing finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 175
  },
  {
    "id": "p6",
    "slug": "calendar-corporate-calendars-model-6",
    "sku": "CAL-COR-1006",
    "name": "Premium Corporate Calendars Model 6",
    "categoryId": "c3",
    "material": "Recycled Paper",
    "paperGsm": 170,
    "printingType": "UV Coating",
    "size": "A5",
    "orientation": "Portrait",
    "moq": 100,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "corporate-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": true,
    "rating": 4.2,
    "reviewsCount": 198,
    "thumbnail": "/assets/products/thumb-6.jpg",
    "hoverImage": "/assets/products/hover-6.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-6.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-6.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality corporate calendars suitable for all your needs. It features exceptional binding and UV Coating finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 180
  },
  {
    "id": "p7",
    "slug": "calendar-religious-calendars-model-7",
    "sku": "CAL-REL-1007",
    "name": "Premium Religious Calendars Model 7",
    "categoryId": "c4",
    "material": "Premium Glossy",
    "paperGsm": 210,
    "printingType": "Foil Stamping",
    "size": "Custom",
    "orientation": "Landscape",
    "moq": 150,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "religious-calendars"
    ],
    "featured": false,
    "bestSeller": true,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": false,
    "rating": 4.6,
    "reviewsCount": 13,
    "thumbnail": "/assets/products/thumb-7.jpg",
    "hoverImage": "/assets/products/hover-7.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-7.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-7.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality religious calendars suitable for all your needs. It features exceptional binding and Foil Stamping finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 185
  },
  {
    "id": "p8",
    "slug": "calendar-wall-calendars-model-8",
    "sku": "CAL-WAL-1008",
    "name": "Premium Wall Calendars Model 8",
    "categoryId": "c1",
    "material": "Art Paper",
    "paperGsm": 250,
    "printingType": "Offset Printing",
    "size": "A3",
    "orientation": "Square",
    "moq": 200,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "wall-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": true,
    "corporateEligible": true,
    "sampleAvailable": true,
    "rating": 4.6,
    "reviewsCount": 82,
    "thumbnail": "/assets/products/thumb-8.jpg",
    "hoverImage": "/assets/products/hover-8.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-8.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-8.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality wall calendars suitable for all your needs. It features exceptional binding and Offset Printing finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 190
  },
  {
    "id": "p9",
    "slug": "calendar-desk-calendars-model-9",
    "sku": "CAL-DES-1009",
    "name": "Premium Desk Calendars Model 9",
    "categoryId": "c2",
    "material": "Matte Paper",
    "paperGsm": 290,
    "printingType": "Digital Printing",
    "size": "A4",
    "orientation": "Portrait",
    "moq": 100,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "desk-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": false,
    "rating": 4.1,
    "reviewsCount": 84,
    "thumbnail": "/assets/products/thumb-9.jpg",
    "hoverImage": "/assets/products/hover-9.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-9.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-9.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality desk calendars suitable for all your needs. It features exceptional binding and Digital Printing finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 195
  },
  {
    "id": "p10",
    "slug": "calendar-corporate-calendars-model-10",
    "sku": "CAL-COR-1010",
    "name": "Premium Corporate Calendars Model 10",
    "categoryId": "c3",
    "material": "Recycled Paper",
    "paperGsm": 130,
    "printingType": "UV Coating",
    "size": "A5",
    "orientation": "Landscape",
    "moq": 150,
    "stockStatus": "Out of Stock",
    "tags": [
      "premium",
      "corporate",
      "corporate-calendars"
    ],
    "featured": true,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": true,
    "rating": 4,
    "reviewsCount": 199,
    "thumbnail": "/assets/products/thumb-10.jpg",
    "hoverImage": "/assets/products/hover-10.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-10.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-10.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality corporate calendars suitable for all your needs. It features exceptional binding and UV Coating finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 200
  },
  {
    "id": "p11",
    "slug": "calendar-religious-calendars-model-11",
    "sku": "CAL-REL-1011",
    "name": "Premium Religious Calendars Model 11",
    "categoryId": "c4",
    "material": "Premium Glossy",
    "paperGsm": 170,
    "printingType": "Foil Stamping",
    "size": "Custom",
    "orientation": "Square",
    "moq": 200,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "religious-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": false,
    "rating": 4.4,
    "reviewsCount": 43,
    "thumbnail": "/assets/products/thumb-11.jpg",
    "hoverImage": "/assets/products/hover-11.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-11.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-11.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality religious calendars suitable for all your needs. It features exceptional binding and Foil Stamping finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 205
  },
  {
    "id": "p12",
    "slug": "calendar-wall-calendars-model-12",
    "sku": "CAL-WAL-1012",
    "name": "Premium Wall Calendars Model 12",
    "categoryId": "c1",
    "material": "Art Paper",
    "paperGsm": 210,
    "printingType": "Offset Printing",
    "size": "A3",
    "orientation": "Portrait",
    "moq": 100,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "wall-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": true,
    "corporateEligible": true,
    "sampleAvailable": true,
    "rating": 4.5,
    "reviewsCount": 85,
    "thumbnail": "/assets/products/thumb-12.jpg",
    "hoverImage": "/assets/products/hover-12.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-12.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-12.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality wall calendars suitable for all your needs. It features exceptional binding and Offset Printing finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 210
  },
  {
    "id": "p13",
    "slug": "calendar-desk-calendars-model-13",
    "sku": "CAL-DES-1013",
    "name": "Premium Desk Calendars Model 13",
    "categoryId": "c2",
    "material": "Matte Paper",
    "paperGsm": 250,
    "printingType": "Digital Printing",
    "size": "A4",
    "orientation": "Landscape",
    "moq": 150,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "desk-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": false,
    "rating": 4.9,
    "reviewsCount": 87,
    "thumbnail": "/assets/products/thumb-13.jpg",
    "hoverImage": "/assets/products/hover-13.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-13.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-13.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality desk calendars suitable for all your needs. It features exceptional binding and Digital Printing finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 215
  },
  {
    "id": "p14",
    "slug": "calendar-corporate-calendars-model-14",
    "sku": "CAL-COR-1014",
    "name": "Premium Corporate Calendars Model 14",
    "categoryId": "c3",
    "material": "Recycled Paper",
    "paperGsm": 290,
    "printingType": "UV Coating",
    "size": "A5",
    "orientation": "Square",
    "moq": 200,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "corporate-calendars"
    ],
    "featured": false,
    "bestSeller": true,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": true,
    "rating": 4.7,
    "reviewsCount": 72,
    "thumbnail": "/assets/products/thumb-14.jpg",
    "hoverImage": "/assets/products/hover-14.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-14.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-14.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality corporate calendars suitable for all your needs. It features exceptional binding and UV Coating finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 220
  },
  {
    "id": "p15",
    "slug": "calendar-religious-calendars-model-15",
    "sku": "CAL-REL-1015",
    "name": "Premium Religious Calendars Model 15",
    "categoryId": "c4",
    "material": "Premium Glossy",
    "paperGsm": 130,
    "printingType": "Foil Stamping",
    "size": "Custom",
    "orientation": "Portrait",
    "moq": 100,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "religious-calendars"
    ],
    "featured": true,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": false,
    "rating": 4.6,
    "reviewsCount": 193,
    "thumbnail": "/assets/products/thumb-15.jpg",
    "hoverImage": "/assets/products/hover-15.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-15.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-15.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality religious calendars suitable for all your needs. It features exceptional binding and Foil Stamping finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 225
  },
  {
    "id": "p16",
    "slug": "calendar-wall-calendars-model-16",
    "sku": "CAL-WAL-1016",
    "name": "Premium Wall Calendars Model 16",
    "categoryId": "c1",
    "material": "Art Paper",
    "paperGsm": 170,
    "printingType": "Offset Printing",
    "size": "A3",
    "orientation": "Landscape",
    "moq": 150,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "wall-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": true,
    "corporateEligible": true,
    "sampleAvailable": true,
    "rating": 5,
    "reviewsCount": 158,
    "thumbnail": "/assets/products/thumb-16.jpg",
    "hoverImage": "/assets/products/hover-16.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-16.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-16.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality wall calendars suitable for all your needs. It features exceptional binding and Offset Printing finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 230
  },
  {
    "id": "p17",
    "slug": "calendar-desk-calendars-model-17",
    "sku": "CAL-DES-1017",
    "name": "Premium Desk Calendars Model 17",
    "categoryId": "c2",
    "material": "Matte Paper",
    "paperGsm": 210,
    "printingType": "Digital Printing",
    "size": "A4",
    "orientation": "Square",
    "moq": 200,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "desk-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": false,
    "rating": 4.6,
    "reviewsCount": 200,
    "thumbnail": "/assets/products/thumb-17.jpg",
    "hoverImage": "/assets/products/hover-17.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-17.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-17.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality desk calendars suitable for all your needs. It features exceptional binding and Digital Printing finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 235
  },
  {
    "id": "p18",
    "slug": "calendar-corporate-calendars-model-18",
    "sku": "CAL-COR-1018",
    "name": "Premium Corporate Calendars Model 18",
    "categoryId": "c3",
    "material": "Recycled Paper",
    "paperGsm": 250,
    "printingType": "UV Coating",
    "size": "A5",
    "orientation": "Portrait",
    "moq": 100,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "corporate-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": true,
    "rating": 4,
    "reviewsCount": 35,
    "thumbnail": "/assets/products/thumb-18.jpg",
    "hoverImage": "/assets/products/hover-18.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-18.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-18.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality corporate calendars suitable for all your needs. It features exceptional binding and UV Coating finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 240
  },
  {
    "id": "p19",
    "slug": "calendar-religious-calendars-model-19",
    "sku": "CAL-REL-1019",
    "name": "Premium Religious Calendars Model 19",
    "categoryId": "c4",
    "material": "Premium Glossy",
    "paperGsm": 290,
    "printingType": "Foil Stamping",
    "size": "Custom",
    "orientation": "Landscape",
    "moq": 150,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "religious-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": false,
    "rating": 5,
    "reviewsCount": 101,
    "thumbnail": "/assets/products/thumb-19.jpg",
    "hoverImage": "/assets/products/hover-19.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-19.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-19.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality religious calendars suitable for all your needs. It features exceptional binding and Foil Stamping finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 245
  },
  {
    "id": "p20",
    "slug": "calendar-wall-calendars-model-20",
    "sku": "CAL-WAL-1020",
    "name": "Premium Wall Calendars Model 20",
    "categoryId": "c1",
    "material": "Art Paper",
    "paperGsm": 130,
    "printingType": "Offset Printing",
    "size": "A3",
    "orientation": "Square",
    "moq": 200,
    "stockStatus": "Out of Stock",
    "tags": [
      "premium",
      "corporate",
      "wall-calendars"
    ],
    "featured": true,
    "bestSeller": false,
    "newArrival": true,
    "corporateEligible": true,
    "sampleAvailable": true,
    "rating": 4.5,
    "reviewsCount": 71,
    "thumbnail": "/assets/products/thumb-20.jpg",
    "hoverImage": "/assets/products/hover-20.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-20.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-20.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality wall calendars suitable for all your needs. It features exceptional binding and Offset Printing finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 250
  },
  {
    "id": "p21",
    "slug": "calendar-desk-calendars-model-21",
    "sku": "CAL-DES-1021",
    "name": "Premium Desk Calendars Model 21",
    "categoryId": "c2",
    "material": "Matte Paper",
    "paperGsm": 170,
    "printingType": "Digital Printing",
    "size": "A4",
    "orientation": "Portrait",
    "moq": 100,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "desk-calendars"
    ],
    "featured": false,
    "bestSeller": true,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": false,
    "rating": 4.9,
    "reviewsCount": 155,
    "thumbnail": "/assets/products/thumb-21.jpg",
    "hoverImage": "/assets/products/hover-21.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-21.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-21.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality desk calendars suitable for all your needs. It features exceptional binding and Digital Printing finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 255
  },
  {
    "id": "p22",
    "slug": "calendar-corporate-calendars-model-22",
    "sku": "CAL-COR-1022",
    "name": "Premium Corporate Calendars Model 22",
    "categoryId": "c3",
    "material": "Recycled Paper",
    "paperGsm": 210,
    "printingType": "UV Coating",
    "size": "A5",
    "orientation": "Landscape",
    "moq": 150,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "corporate-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": true,
    "rating": 4.5,
    "reviewsCount": 188,
    "thumbnail": "/assets/products/thumb-22.jpg",
    "hoverImage": "/assets/products/hover-22.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-22.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-22.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality corporate calendars suitable for all your needs. It features exceptional binding and UV Coating finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 260
  },
  {
    "id": "p23",
    "slug": "calendar-religious-calendars-model-23",
    "sku": "CAL-REL-1023",
    "name": "Premium Religious Calendars Model 23",
    "categoryId": "c4",
    "material": "Premium Glossy",
    "paperGsm": 250,
    "printingType": "Foil Stamping",
    "size": "Custom",
    "orientation": "Square",
    "moq": 200,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "religious-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": false,
    "rating": 4.9,
    "reviewsCount": 92,
    "thumbnail": "/assets/products/thumb-23.jpg",
    "hoverImage": "/assets/products/hover-23.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-23.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-23.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality religious calendars suitable for all your needs. It features exceptional binding and Foil Stamping finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 265
  },
  {
    "id": "p24",
    "slug": "calendar-wall-calendars-model-24",
    "sku": "CAL-WAL-1024",
    "name": "Premium Wall Calendars Model 24",
    "categoryId": "c1",
    "material": "Art Paper",
    "paperGsm": 290,
    "printingType": "Offset Printing",
    "size": "A3",
    "orientation": "Portrait",
    "moq": 100,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "wall-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": true,
    "corporateEligible": true,
    "sampleAvailable": true,
    "rating": 5,
    "reviewsCount": 187,
    "thumbnail": "/assets/products/thumb-24.jpg",
    "hoverImage": "/assets/products/hover-24.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-24.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-24.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality wall calendars suitable for all your needs. It features exceptional binding and Offset Printing finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 270
  },
  {
    "id": "p25",
    "slug": "calendar-desk-calendars-model-25",
    "sku": "CAL-DES-1025",
    "name": "Premium Desk Calendars Model 25",
    "categoryId": "c2",
    "material": "Matte Paper",
    "paperGsm": 130,
    "printingType": "Digital Printing",
    "size": "A4",
    "orientation": "Landscape",
    "moq": 150,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "desk-calendars"
    ],
    "featured": true,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": false,
    "rating": 4.3,
    "reviewsCount": 38,
    "thumbnail": "/assets/products/thumb-25.jpg",
    "hoverImage": "/assets/products/hover-25.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-25.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-25.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality desk calendars suitable for all your needs. It features exceptional binding and Digital Printing finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 275
  },
  {
    "id": "p26",
    "slug": "calendar-corporate-calendars-model-26",
    "sku": "CAL-COR-1026",
    "name": "Premium Corporate Calendars Model 26",
    "categoryId": "c3",
    "material": "Recycled Paper",
    "paperGsm": 170,
    "printingType": "UV Coating",
    "size": "A5",
    "orientation": "Square",
    "moq": 200,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "corporate-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": true,
    "rating": 4.6,
    "reviewsCount": 73,
    "thumbnail": "/assets/products/thumb-26.jpg",
    "hoverImage": "/assets/products/hover-26.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-26.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-26.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality corporate calendars suitable for all your needs. It features exceptional binding and UV Coating finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 280
  },
  {
    "id": "p27",
    "slug": "calendar-religious-calendars-model-27",
    "sku": "CAL-REL-1027",
    "name": "Premium Religious Calendars Model 27",
    "categoryId": "c4",
    "material": "Premium Glossy",
    "paperGsm": 210,
    "printingType": "Foil Stamping",
    "size": "Custom",
    "orientation": "Portrait",
    "moq": 100,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "religious-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": false,
    "rating": 4.3,
    "reviewsCount": 78,
    "thumbnail": "/assets/products/thumb-27.jpg",
    "hoverImage": "/assets/products/hover-27.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-27.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-27.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality religious calendars suitable for all your needs. It features exceptional binding and Foil Stamping finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 285
  },
  {
    "id": "p28",
    "slug": "calendar-wall-calendars-model-28",
    "sku": "CAL-WAL-1028",
    "name": "Premium Wall Calendars Model 28",
    "categoryId": "c1",
    "material": "Art Paper",
    "paperGsm": 250,
    "printingType": "Offset Printing",
    "size": "A3",
    "orientation": "Landscape",
    "moq": 150,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "wall-calendars"
    ],
    "featured": false,
    "bestSeller": true,
    "newArrival": true,
    "corporateEligible": true,
    "sampleAvailable": true,
    "rating": 4.6,
    "reviewsCount": 122,
    "thumbnail": "/assets/products/thumb-28.jpg",
    "hoverImage": "/assets/products/hover-28.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-28.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-28.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality wall calendars suitable for all your needs. It features exceptional binding and Offset Printing finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 290
  },
  {
    "id": "p29",
    "slug": "calendar-desk-calendars-model-29",
    "sku": "CAL-DES-1029",
    "name": "Premium Desk Calendars Model 29",
    "categoryId": "c2",
    "material": "Matte Paper",
    "paperGsm": 290,
    "printingType": "Digital Printing",
    "size": "A4",
    "orientation": "Square",
    "moq": 200,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "desk-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": false,
    "rating": 4.9,
    "reviewsCount": 57,
    "thumbnail": "/assets/products/thumb-29.jpg",
    "hoverImage": "/assets/products/hover-29.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-29.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-29.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality desk calendars suitable for all your needs. It features exceptional binding and Digital Printing finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 295
  },
  {
    "id": "p30",
    "slug": "calendar-corporate-calendars-model-30",
    "sku": "CAL-COR-1030",
    "name": "Premium Corporate Calendars Model 30",
    "categoryId": "c3",
    "material": "Recycled Paper",
    "paperGsm": 130,
    "printingType": "UV Coating",
    "size": "A5",
    "orientation": "Portrait",
    "moq": 100,
    "stockStatus": "Out of Stock",
    "tags": [
      "premium",
      "corporate",
      "corporate-calendars"
    ],
    "featured": true,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": true,
    "rating": 4.1,
    "reviewsCount": 45,
    "thumbnail": "/assets/products/thumb-30.jpg",
    "hoverImage": "/assets/products/hover-30.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-30.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-30.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality corporate calendars suitable for all your needs. It features exceptional binding and UV Coating finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 300
  },
  {
    "id": "p31",
    "slug": "calendar-religious-calendars-model-31",
    "sku": "CAL-REL-1031",
    "name": "Premium Religious Calendars Model 31",
    "categoryId": "c4",
    "material": "Premium Glossy",
    "paperGsm": 170,
    "printingType": "Foil Stamping",
    "size": "Custom",
    "orientation": "Landscape",
    "moq": 150,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "religious-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": false,
    "rating": 4.7,
    "reviewsCount": 75,
    "thumbnail": "/assets/products/thumb-31.jpg",
    "hoverImage": "/assets/products/hover-31.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-31.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-31.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality religious calendars suitable for all your needs. It features exceptional binding and Foil Stamping finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 305
  },
  {
    "id": "p32",
    "slug": "calendar-wall-calendars-model-32",
    "sku": "CAL-WAL-1032",
    "name": "Premium Wall Calendars Model 32",
    "categoryId": "c1",
    "material": "Art Paper",
    "paperGsm": 210,
    "printingType": "Offset Printing",
    "size": "A3",
    "orientation": "Square",
    "moq": 200,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "wall-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": true,
    "corporateEligible": true,
    "sampleAvailable": true,
    "rating": 4.1,
    "reviewsCount": 184,
    "thumbnail": "/assets/products/thumb-32.jpg",
    "hoverImage": "/assets/products/hover-32.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-32.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-32.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality wall calendars suitable for all your needs. It features exceptional binding and Offset Printing finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 310
  },
  {
    "id": "p33",
    "slug": "calendar-desk-calendars-model-33",
    "sku": "CAL-DES-1033",
    "name": "Premium Desk Calendars Model 33",
    "categoryId": "c2",
    "material": "Matte Paper",
    "paperGsm": 250,
    "printingType": "Digital Printing",
    "size": "A4",
    "orientation": "Portrait",
    "moq": 100,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "desk-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": false,
    "rating": 4.9,
    "reviewsCount": 85,
    "thumbnail": "/assets/products/thumb-33.jpg",
    "hoverImage": "/assets/products/hover-33.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-33.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-33.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality desk calendars suitable for all your needs. It features exceptional binding and Digital Printing finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 315
  },
  {
    "id": "p34",
    "slug": "calendar-corporate-calendars-model-34",
    "sku": "CAL-COR-1034",
    "name": "Premium Corporate Calendars Model 34",
    "categoryId": "c3",
    "material": "Recycled Paper",
    "paperGsm": 290,
    "printingType": "UV Coating",
    "size": "A5",
    "orientation": "Landscape",
    "moq": 150,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "corporate-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": true,
    "rating": 4.2,
    "reviewsCount": 83,
    "thumbnail": "/assets/products/thumb-34.jpg",
    "hoverImage": "/assets/products/hover-34.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-34.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-34.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality corporate calendars suitable for all your needs. It features exceptional binding and UV Coating finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 320
  },
  {
    "id": "p35",
    "slug": "calendar-religious-calendars-model-35",
    "sku": "CAL-REL-1035",
    "name": "Premium Religious Calendars Model 35",
    "categoryId": "c4",
    "material": "Premium Glossy",
    "paperGsm": 130,
    "printingType": "Foil Stamping",
    "size": "Custom",
    "orientation": "Square",
    "moq": 200,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "religious-calendars"
    ],
    "featured": true,
    "bestSeller": true,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": false,
    "rating": 4.5,
    "reviewsCount": 43,
    "thumbnail": "/assets/products/thumb-35.jpg",
    "hoverImage": "/assets/products/hover-35.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-35.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-35.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality religious calendars suitable for all your needs. It features exceptional binding and Foil Stamping finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 325
  },
  {
    "id": "p36",
    "slug": "calendar-wall-calendars-model-36",
    "sku": "CAL-WAL-1036",
    "name": "Premium Wall Calendars Model 36",
    "categoryId": "c1",
    "material": "Art Paper",
    "paperGsm": 170,
    "printingType": "Offset Printing",
    "size": "A3",
    "orientation": "Portrait",
    "moq": 100,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "wall-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": true,
    "corporateEligible": true,
    "sampleAvailable": true,
    "rating": 4.3,
    "reviewsCount": 71,
    "thumbnail": "/assets/products/thumb-36.jpg",
    "hoverImage": "/assets/products/hover-36.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-36.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-36.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality wall calendars suitable for all your needs. It features exceptional binding and Offset Printing finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 330
  },
  {
    "id": "p37",
    "slug": "calendar-desk-calendars-model-37",
    "sku": "CAL-DES-1037",
    "name": "Premium Desk Calendars Model 37",
    "categoryId": "c2",
    "material": "Matte Paper",
    "paperGsm": 210,
    "printingType": "Digital Printing",
    "size": "A4",
    "orientation": "Landscape",
    "moq": 150,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "desk-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": false,
    "rating": 4.8,
    "reviewsCount": 163,
    "thumbnail": "/assets/products/thumb-37.jpg",
    "hoverImage": "/assets/products/hover-37.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-37.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-37.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality desk calendars suitable for all your needs. It features exceptional binding and Digital Printing finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 335
  },
  {
    "id": "p38",
    "slug": "calendar-corporate-calendars-model-38",
    "sku": "CAL-COR-1038",
    "name": "Premium Corporate Calendars Model 38",
    "categoryId": "c3",
    "material": "Recycled Paper",
    "paperGsm": 250,
    "printingType": "UV Coating",
    "size": "A5",
    "orientation": "Square",
    "moq": 200,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "corporate-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": true,
    "rating": 4.8,
    "reviewsCount": 106,
    "thumbnail": "/assets/products/thumb-38.jpg",
    "hoverImage": "/assets/products/hover-38.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-38.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-38.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality corporate calendars suitable for all your needs. It features exceptional binding and UV Coating finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 340
  },
  {
    "id": "p39",
    "slug": "calendar-religious-calendars-model-39",
    "sku": "CAL-REL-1039",
    "name": "Premium Religious Calendars Model 39",
    "categoryId": "c4",
    "material": "Premium Glossy",
    "paperGsm": 290,
    "printingType": "Foil Stamping",
    "size": "Custom",
    "orientation": "Portrait",
    "moq": 100,
    "stockStatus": "In Stock",
    "tags": [
      "premium",
      "corporate",
      "religious-calendars"
    ],
    "featured": false,
    "bestSeller": false,
    "newArrival": false,
    "corporateEligible": true,
    "sampleAvailable": false,
    "rating": 4.8,
    "reviewsCount": 173,
    "thumbnail": "/assets/products/thumb-39.jpg",
    "hoverImage": "/assets/products/hover-39.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-39.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-39.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality religious calendars suitable for all your needs. It features exceptional binding and Foil Stamping finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 345
  },
  {
    "id": "p40",
    "slug": "calendar-wall-calendars-model-40",
    "sku": "CAL-WAL-1040",
    "name": "Premium Wall Calendars Model 40",
    "categoryId": "c1",
    "material": "Art Paper",
    "paperGsm": 130,
    "printingType": "Offset Printing",
    "size": "A3",
    "orientation": "Landscape",
    "moq": 150,
    "stockStatus": "Out of Stock",
    "tags": [
      "premium",
      "corporate",
      "wall-calendars"
    ],
    "featured": true,
    "bestSeller": false,
    "newArrival": true,
    "corporateEligible": true,
    "sampleAvailable": true,
    "rating": 4.1,
    "reviewsCount": 50,
    "thumbnail": "/assets/products/thumb-40.jpg",
    "hoverImage": "/assets/products/hover-40.jpg",
    "gallery": [
      {
        "url": "/assets/products/thumb-40.jpg",
        "alt": "Image 1"
      },
      {
        "url": "/assets/products/hover-40.jpg",
        "alt": "Image 2"
      }
    ],
    "description": "This is a highly detailed, premium quality wall calendars suitable for all your needs. It features exceptional binding and Offset Printing finish.",
    "specifications": {
      "Binding": "Wire-O",
      "Pages": "12 Pages + Cover",
      "Packaging": "Individual Shrink Wrap"
    },
    "price": 350
  }
];

const REAL_NAMES = [
  "300 - MAHA GANPATI",
  "301 - BHAKTI SAMARPAN",
  "302 - AARTI SANGRAH",
  "303 - RADHA MADHAV",
  "304 - SAI BABA",
  "305 - JAI JAI JAGANNATH PRABHU",
  "1501 - SHREE GANESHAYA NAMAHA",
  "1502 - PRABHU ARADHANA",
  "1503 - RADHA KRISHNA",
  "1504 - SAI BABA",
  "1505 - GO GREEN - Breathe Clean",
  "1506 - HEALTH & WELLNESS",
  "1507 - MOTIVATIONAL",
  "1508 - MOTIVATION - The Will to Win",
  "1509 - INSPIRATION - Stay Strong",
  "1510 - DON'T GIVE UP",
  "1511 - MINDFUL ESCAPE",
  "1512 - DREAM IT - BELIEVE IT - ACHIEVE IT",
  "1513 - DO IT NOW",
  "1514 - ROYAL HERITAGE",
  "1515 - TRAVEL VISTA",
  "1516 - NATURE & HORIZONS",
  "1517 - WONDERFUL NATURE",
  "1518 - WORLD MONUMENTS",
  "Pratham Ganesh 2027",
  "Mangal Ganesh 2027",
  "Shree Ganesh Aarti",
  "Pilliyar Patti Ganesh",
  "Char Dham Yatra",
  "Om Gayatri Mantra"
];

export const products: Product[] = rawProducts.map((p, idx) => {
  const img1 = REAL_IMAGES[idx % REAL_IMAGES.length];
  const realName = REAL_NAMES[idx % REAL_NAMES.length];
  return {
    ...p,
    name: realName,
    thumbnail: img1,
    hoverImage: img1,
    gallery: [
      { url: img1, alt: `${realName} View 1` }
    ]
  };
});

