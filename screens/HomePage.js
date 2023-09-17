import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ImageBackground,
    TouchableWithoutFeedback,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import axios from "axios";
  import ListBox from "../components/ListBox";
  import Constants from "expo-constants";
  
  const HomePage = ({ navigation }) => {
    const [newsData, setNewsData] = useState([]);
  
    const [titlePage, setTitlePage] = useState("");
  
    const categories = [
      {
        id: "general",
        label: "Uncategorized",
      },
      {
        id: "business",
        label: "Business",
      },
      {
        id: "entertainment",
        label:"Entertainment",
      },
      {
        id: "health",
        label: "Health",
      },
      {
        id: "science",
        label: "Science",
      },
      {
        id: "sports",
        label: "Sports",
      },
      {
        id: "technology",
        label: "Technology",
      },
    ];
  
    const getNewsAPI = (category) => {
      axios
        .get(
          "http://api.mediastack.com/v1/news?access_key=a54dc656bb404de10ee3d8bba42048a8&categories=" +
            category
        ) 
        .then((value) => {
          setNewsData([]);
          value.data.data.forEach((item) => {
            if (item.image !== null) {
              setNewsData((currentItem) => [...currentItem, item]);
            }
          }); 
        });
    };
  
    useEffect(() => {
      getNewsAPI("general");
    }, []);
  
    const handleNavigation = (value) => {
      navigation.navigate("Details", { NewsData: value });
    };
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            marginTop: Constants.statusBarHeight,
            fontWeight: "bold",
            color: "#B08BBB",
          }}
        >
          Global News {titlePage}
        </Text>
  
        <View style={styles.FlatListContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={newsData.slice(0,4)}
            horizontal
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => (
              <ListBox
                handlePress={() => handleNavigation(item)}
                NewsData={item}
              />
            )}
          />
        </View>
  
        <View style={styles.categoryContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={categories}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  getNewsAPI(item.id);
                  setTitlePage(item.label);
                }}
              >
                <View
                  style={{
                    padding: 10,
                    height: 40,
                    margin: 10,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#efefef",
                    borderRadius: 6,
                  }}
                >
                  <Text>{item.label}</Text>
                </View>
              </TouchableWithoutFeedback>
            )}
          />
        </View>
  
        <View style={styles.descriptionContainer}>
          <FlatList
            style={styles.textCategory}
            showsVerticalScrollIndicator={false}
            data={newsData.slice(5,undefined)}
            vertical
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback onPress={() => handleNavigation(item)}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginBottom: 15,
                  }}
                >
                  <View
                    style={{
                      width: 100,
                      height: 100,
                      overflow: "hidden",
                      borderRadius: 6,
                    }}
                  >
                    <ImageBackground
                      source={{ uri: item.image }}
                      resizeMode="cover"
                      style={{ width: 90, flex: 1, justifyContent: "center" }}
                    />
                  </View>
  
                  <View
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    <View>
                      <Text>{item.author}</Text>
                    </View>
                    <View>
                      <Text>{item.title}</Text>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            )}
          />
        </View>
      </View>
    );
  };
  
  export default HomePage;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#ffffff",
    },
    FlatListContainer: {
      width: "80%",
      borderRadius: 10,
      backgroundColor: "#ffffff",
    },
    categoryContainer: {
      width: "80%",
      borderRadius: 10,
      textAlign: "center",
    },
    textCategory: {
      fontWeight: "bold",
    },
    descriptionContainer: {
      width: "80%",
      borderRadius: 10,
      textAlign: "center",
    },
  });
  