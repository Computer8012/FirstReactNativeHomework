import React, { useEffect, useState } from "react";
import { BackHandler, Image, Text, TouchableOpacity, View } from "react-native";
import AppContentStyle from "./AppContentStyle";
import Home from "../../pages/home/Home";
import IRoute from "../../features/model/IRoute";
import Calc from "../../pages/calc/Calc";
import NotFound from "../../pages/404/404";

const startPage: IRoute = {
  slug: "home",
};

const AppContent: React.FC = () => {
  const [history, setHistory] = useState<Array<IRoute>>([]);
  const [page, setPage] = useState<IRoute>(startPage);

  const navigate = (route: IRoute): void => {
    if (route.slug == "-1") {
      if (history.length > 0) {
        const newHistory = [...history];
        const prevPage = newHistory.pop();

        if (prevPage) {
          setPage(prevPage);
          setHistory(newHistory);
        }
      } else {
        BackHandler.exitApp();
      }
    }
    else if (route.slug != page.slug) {
      setHistory([...history, page]);
      setPage(route);
    }
  };

  useEffect(() => {
    const handler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        navigate({ slug: "-1" });
        return true;
      }
    );

    return () => handler.remove();
  }, [history, page]);

  useEffect(() => {
    console.log(history);
  }, [history]);

  return (
    <View style={AppContentStyle.container}>

      <View style={AppContentStyle.topBar}>
        <View style={AppContentStyle.topBarIcon}></View>
        <Text style={AppContentStyle.topBarTitle}>Mobile-P33</Text>
        <View style={AppContentStyle.topBarIcon}></View>
      </View>

      <View style={AppContentStyle.pageWidget}>
        {
          page.slug == "home" ? <Home /> :
          page.slug == "calc" ? <Calc /> :
          page.slug == "not-found" ? <NotFound /> :
          <NotFound />
        }
      </View>

      <View style={AppContentStyle.bottomBar}>

        <TouchableOpacity onPress={() => navigate({ slug: "home" })}>
          <Image
            style={AppContentStyle.bottomBarIcon}
            source={require("../asset/HomeIcon.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate({ slug: "calc" })}>
          <Image
            style={AppContentStyle.bottomBarIcon}
            source={require("../asset/CalcIcon.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate({ slug: "unknown" })}>
          <Image
            style={AppContentStyle.bottomBarIcon}
            source={require("../asset/NotFoundIcon.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate({ slug: "calc" })}>
          <Image
            style={AppContentStyle.bottomBarIcon}
            source={require("../asset/CalcIcon.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate({ slug: "-1" })}>
          <Image
            style={AppContentStyle.bottomBarIcon}
            source={require("../asset/HomeIcon.png")}
          />
        </TouchableOpacity>

      </View>

    </View>
  );
};

export default AppContent;