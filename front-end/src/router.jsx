import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import OrderMenu from "./pages/OrderMenu";
import OrderStore from "./pages/OrderStore";
import Cart from "./pages/Cart";
import Confirmation from "./pages/Confirmation";
import Recipe from "./pages/Recipe";
import MyRecipe from "./pages/MyRecipe";
import NewRecipe from "./pages/NewRecipe";
import RecipeShare from "./pages/RecipeShare";
import NicknameForm from "./pages/NicknameForm";
import App from "./App";
import NotFound from "./pages/NotFound";

const routerData = [
  {
    id: 0,
    path: "/",
    label: "Home",
    element: <Home />,
    withAuth: false,
  },
  {
    id: 1,
    path: "/signup",
    label: "회원가입",
    element: <SignUp />,
    withAuth: false,
  },
  {
    id: 2,
    path: "/login",
    label: "로그인",
    element: <Login />,
    withAuth: false,
  },
  {
    id: 3,
    path: "/order-menu",
    label: "메뉴 선택",
    element: <OrderMenu />,
    withAuth: true,
  },
  {
    id: 4,
    path: "/order-store",
    label: "매장 선택",
    element: <OrderStore />,
    withAuth: true,
  },
  {
    id: 5,
    path: "/cart",
    label: "장바구니",
    element: <Cart />,
    withAuth: true,
  },
  {
    id: 6,
    path: "/confirmation",
    label: "주문 완료",
    element: <Confirmation />,
    withAuth: true,
  },
  {
    id: 7,
    path: "/recipe",
    label: "레시피",
    element: <Recipe />,
    withAuth: false,
  },
  {
    id: 8,
    path: "/my-recipe",
    label: "나의 레시피",
    element: <MyRecipe />,
    withAuth: true,
  },
  {
    id: 9,
    path: "/new-recipe",
    label: "새 레시피",
    element: <NewRecipe />,
    withAuth: false,
  },
  {
    id: 10,
    path: "/recipe-share",
    label: "레시피 공유",
    element: <RecipeShare />,
    withAuth: false,
  },

  {
    id: 11,
    path: "/nickname-form",
    label: "닉네임 입력",
    element: <NicknameForm />,
    withAuth: true,
  },
  // 상세 레시피 id? - 저장 버튼 누를 때 로그인 필요
  // 회원가입
  // 마이페이지
];

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: routerData.map((router) => {
      if (router.withAuth) {
        return {
          path: router.path,
          element: <AuthLayout>{router.element}</AuthLayout>,
        };
      } else {
        return {
          path: router.path,
          element: router.element,
        };
      }
    }),
  },
]);
