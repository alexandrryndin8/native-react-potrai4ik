import { router } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center">
        <Text className="text-base text-black mb-3">Sign In</Text>
        <Button
          title="Sign Up"
          onPress={() => router.push("/sign-up")}
        ></Button>
      </View>
    </SafeAreaView>
  );
}
