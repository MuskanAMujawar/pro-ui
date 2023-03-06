export const route = [
  {
    path: "/",
    name: "Home",
    icone: "fa fa-home",
  },
  {
    path: "/order",
    name: "Order",
    icone: "fa-solid fa-bag-shopping",
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/Product",
    name: "Product",
    icone: "fa-sharp fa-solid fa-box-archive",
    subRoutes: [
      {
        path: "/product/productlist",
        name: "Product List",
        icone: "fa fahome",
      },
      {
        path: "/product/Addproduct",
        name: "Add Product",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/Category",
    name: "Category",
    icone: "fa-sharp fa-solid fa-box-archive",
    subRoutes: [
      {
        path: "/category/categorylist",
        name: "Category List",
        icone: "fa fahome",
      },
      {
        path: "/category/addcategory",
        name: "Add Category",
        icone: "fa fahome",
      },
          ],
  },
  {
    path: "/brand",
    name: "Brand",
    icone: "fa-solid fa-bag-shopping",
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Brand List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/customer",
    name: "Customer",
    icone: "fa-solid fa-user",
    subRoutes: [
      {
        path: "/customer/customer",
        name: "Customer List",
        icone: "fa fahome",
      },
      {
        path: "/customer/addcustomer",
        name: "Add Customer",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/mastermanagment",
    name: "MasterManagement",
    icone: "fa-solid fa-user-gear",
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/coupon",
    name: "Coupen Code",
    icone: "fa-solid fa-tag",
    subRoutes: [
      {
        path: "/coupon/Addcoupon",
        name: "Add Coupon Code",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/appearance",
    name: "Appearance",
    icone: "fa-solid fa-bag-shopping",
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/media",
    name: "Media",
    icone: "fa-solid fa-circle-play",
    subRoutes: [
      {
        path: "/order/orderList",
        name: "Order List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/gallery",
    name: "Gallery",
    icone: "fa-solid fa-image",
    subRoutes: [
      {
        path: "/gallery/gallerylist",
        name: "Gallery List",
        icone: "fa fahome",
      },
    ],
  },
  {
    path: "/transaction",
    name: "Transaction",
    icone: "fa-solid fa-money-check",
    subRoutes: [
      {
        path: "/transaction/transactionlist",
        name: "Transaction",
        icone: "fa fahome",
      },
    ],
  },
];
