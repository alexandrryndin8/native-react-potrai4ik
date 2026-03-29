import CartButton from "@/components/cartButton";
import { images, offers } from "@/constants";
import cn from "clsx";
import { router } from "expo-router";
import { Fragment } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="bg-slate-100 flex-1">
      <View className="flex-between flex-row w-full mb-2 px-5">
        <View className="flex-start">
          <Text className="text-primary font-bold">DELIVER TO</Text>

          <TouchableOpacity className="flex-center flex-row gap-x-1 mt-0.5">
            <Text className="paragraph-bold text-dark-200">
              Petropavlovsk, KZ
            </Text>
            <Image
              source={images.arrowDown}
              className="size-3"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center gap-2">
          <Pressable
            onPress={() => router.push("/sign-in")}
            className="px-3 py-2 rounded-full bg-white shadow-sm"
            android_ripple={{ color: "#00000022" }}
          >
            <Text className="text-dark-200 font-semibold">Sign In</Text>
          </Pressable>

          <Pressable
            onPress={() => router.push("/sign-up")}
            className="px-3 py-2 rounded-full bg-white"
            android_ripple={{ color: "#FFFFFF55" }}
          >
            <Text className="text-dark-200 font-semibold">Sign Up</Text>
          </Pressable>

          <CartButton />
        </View>
      </View>

      <FlatList
        data={offers}
        renderItem={({ item, index }) => {
          const isEven: boolean = index % 2 === 0;

          return (
            <View>
              <Pressable
                android_ripple={{ color: "#FFFFFF99", foreground: true }}
                className={cn(
                  "offer-card",
                  isEven ? "flex-row-reverse" : "flex-row",
                )}
                style={{ backgroundColor: item.color }}
              >
                {() => (
                  <Fragment>
                    <View className="h-full w-1/2">
                      <Image
                        source={item.image}
                        className="size-full"
                        resizeMode="contain"
                      />
                    </View>

                    <View
                      className={cn(
                        "offer-card__info",
                        isEven ? "pl-10" : "pr-10",
                      )}
                    >
                      <Text className="h1-bold text-white leading-tight">
                        {item.title}
                      </Text>

                      <Image
                        source={images.arrowRight}
                        className="size-10"
                        resizeMode="contain"
                        tintColor="#ffffff"
                      />
                    </View>
                  </Fragment>
                )}
              </Pressable>
            </View>
          );
        }}
        contentContainerClassName="pb-28 px-5"
      />
    </SafeAreaView>
  );
}
