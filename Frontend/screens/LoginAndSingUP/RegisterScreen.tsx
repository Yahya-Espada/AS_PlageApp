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
import { Picker } from '@react-native-picker/picker';
const RegisterScreen = ({ navigation: { navigate } }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [role, setRole] = useState('citoyen');

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
      setPasswordError("password must contain at least one number, and be at least 8 characters long");
    } else {
      setPasswordError("");
    }
    setPassword(text);
  };

  const validateConfirmPassword = (text: string) => {
    if (text !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
    setConfirmPassword(text);
  };


  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            padding: Spacing * 1.5,
            marginTop: 10,
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

                marginVertical: Spacing * 2,
              }}
            >
              Créer un compte
            </Text>
            <Text
              style={{

                fontSize: FontSize.small,
                maxWidth: "80%",
                textAlign: "center",
              }}
            >
              Créez votre compte aujourd'hui et accédez à tous les avantages et fonctionnalités de notre plateforme !
            </Text>
          </View>



          <View
            style={{
              marginVertical: Spacing * 2,
            }}
          >
            <AppTextInput
              placeholder="Username"
              onChangeText={(text) => setUsername(text)}
              value={username}
            />
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
            <AppTextInput
              placeholder="Confirm Password"
              onChangeText={validateConfirmPassword}
              error={confirmPasswordError}
              secureTextEntry
            />

            <Picker
              style={{
                padding: Spacing * 3.2,
                backgroundColor: Colors.lightPrimary,
                marginVertical: Spacing,
              }}
              selectedValue={role}
              onValueChange={(itemValue, itemIndex) =>
                setRole(itemValue)
              }>
              <Picker.Item label="Citoyen" value="citoyen" />
              <Picker.Item label="Locataire" value="locataire" />
              <Picker.Item
                label="Agent Municipalite"
                value="agent_municipalite"
              />
            </Picker>


          </View>


          <TouchableOpacity

            style={{
              padding: Spacing * 2,
              backgroundColor: Colors.primary,
              marginVertical: Spacing * 2,
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
              Sign up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate("Login")}
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
              Déjà un compte
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

export default RegisterScreen;