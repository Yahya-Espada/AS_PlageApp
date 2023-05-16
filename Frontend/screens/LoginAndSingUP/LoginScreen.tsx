import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import AppTextInput from "../../components/AppTextInput";
import { colors } from "../../constants/constant";


const LoginScreen = ({ navigation: { navigate } }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (text: string) => {
    // basic email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(text)) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }
    setEmail(text);
  };

  const validatePassword = (text: string) => {
    // password must contain at least one number, and be at least 8 characters long
    const passwordRegex = /^(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(text)) {
      setPasswordError(
        "password must contain at least one number, and be at least 8 characters long"
      );
    } else {
      setPasswordError("");
    }
    setPassword(text);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            marginTop: 10,
            padding: Spacing * 2,
            backgroundColor: colors.white,
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: FontSize.xLarge,
                color: Colors.primary,

                marginVertical: Spacing * 3,
              }}
            >
              Connectez-vous
            </Text>
            <Text
              style={{

                fontSize: FontSize.large,
                maxWidth: "65%",
                textAlign: "center",
              }}
            >
              Content de vous revoir, vous avez manqué !
            </Text>
          </View>
          <View
            style={{
              marginVertical: Spacing * 3,
            }}
          >
            <AppTextInput
              placeholder="Email"
              onChangeText={validateEmail}
              error={emailError}
            />
            <AppTextInput
              placeholder="Password"
              onChangeText={validatePassword}
              error={passwordError}
              secureTextEntry
            />
          </View>

          <TouchableOpacity>
            <Text
              style={{

                fontSize: FontSize.small,
                color: Colors.primary,
                alignSelf: "flex-end",
              }}
            >
              Mot de passe oublié ?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate("DrawerAdmin")}
            style={{
              padding: Spacing * 2,
              backgroundColor: Colors.primary,
              marginVertical: Spacing * 3,
              borderRadius: Spacing,
              shadowColor: Colors.primary,
              shadowOffset: {
                width: 0,
                height: Spacing,
              },
              shadowOpacity: 0.3,
              shadowRadius: Spacing,
            }}
          >
            <Text
              style={{

                color: Colors.onPrimary,
                textAlign: "center",
                fontSize: FontSize.large,
              }}
            >
              Sign in
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate("Register")}
            style={{
              padding: Spacing,
            }}
          >
            <Text
              style={{

                color: Colors.text,
                textAlign: "center",
                fontSize: FontSize.small,
              }}
            >
              Créer un nouveau compte
            </Text>
          </TouchableOpacity>

          <View
            style={{
              marginVertical: Spacing * 3,
            }}
          >
            <Text
              style={{

                color: Colors.primary,
                textAlign: "center",
                fontSize: FontSize.small,
              }}
            >
              Ou continuer avec
            </Text>

            <View
              style={{
                marginTop: Spacing,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  padding: Spacing,
                  backgroundColor: Colors.gray,
                  borderRadius: Spacing / 2,
                  marginHorizontal: Spacing,
                }}
              >
                <Ionicons
                  name="logo-google"
                  color={Colors.text}
                  size={Spacing * 2}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: Spacing,
                  backgroundColor: Colors.gray,
                  borderRadius: Spacing / 2,
                  marginHorizontal: Spacing,
                }}
              >
                <Ionicons
                  name="logo-apple"
                  color={Colors.text}
                  size={Spacing * 2}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: Spacing,
                  backgroundColor: Colors.gray,
                  borderRadius: Spacing / 2,
                  marginHorizontal: Spacing,
                }}
              >
                <Ionicons
                  name="logo-facebook"
                  color={Colors.text}
                  size={Spacing * 2}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
