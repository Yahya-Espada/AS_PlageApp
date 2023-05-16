import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert,
    ScrollView,
    Dimensions,
    Image,
    Button,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AgentService from '../../../services/agentService';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';
import Colors from '../../../constants/Colors';
import { municipalite } from '../../../infomationsmunicipalite';
import PhoneInput from 'react-native-phone-number-input';
import Icon, { Icons } from '../../../constants/Icons';
import moment from 'moment';
import 'moment/locale/ar';
const { width, height } = Dimensions.get("window")
const emailValidator = require('email-validator');
const AddNewOffre = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState(moment(new Date()).toDate());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedTime, setSelectedTime] = useState(null);
    const showDatePicker1 = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (time) => {
        setSelectedTime(time);
        hideDatePicker();
    };
    const formatDate = (date) => {
        const monthNames = [
            'جانفي',
            'فيفري',
            'مارس',
            'أفريل',
            'ماي',
            'جوان',
            'جويلية',
            'أوت',
            'سبتمبر',
            'أكتوبر',
            'نوفمبر',
            'ديسمبر'
        ];

        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            timeZone: 'UTC',
            numberingSystem: 'latn'
        };

        const formatter = new Intl.DateTimeFormat('ar', options);
        const formattedParts = formatter.formatToParts(date);

        const formattedDate = formattedParts.map((part) => {
            if (part.type === 'month') {
                const monthIndex = date.getMonth();
                return monthNames[monthIndex];
            }
            return part.value;
        }).join('');

        return formattedDate;
    };

    const handleDateChange = (event, date) => {
        setShowDatePicker(false);

        if (date) {
            setSelectedDate(moment(date).toDate());
            setData({
                ...data,
                date_fin_appel: date
            });
        }
    };

    const showDatePickerModal = () => {
        setShowDatePicker(true);
    };

    const [data, setData] = React.useState({
        prix_debut_municipalite: '',
        Change_prix_debut: false,
        isValidPrix_debut: false,
        date_fin_appel: selectedDate,
        nom_offre: '',
        Change_nom_municipalite: false,
        isValidNom: false,
        email_municipalite: '',
        Change_email_municipalite: false,
        isValidEmail: false,
        password_municipalite: '',
        Change_password_municipalite: false,
        isValidPassword: false,
        fonction_municipalite: '',
        Change_fonction_municipalite: false,
        isValidFonction: false,
        privilege_municipalite: '',
        Change_privilege_municipalite: false,
        isValidPrivilege: false,
        telephone_municipalite: '',
        Change_telephone_municipalite: false,
        isValidTelephone: false,
        adresse_municipalite: '',
        Change_adresse_municipalite: false,
        isValidAdresse: false,
        matricule_municipalite: '',
        Change_matricule_municipalite: false,
        isValidMatricule: false,
        secureTextEntry: true,
    });
    const lienimage = '../../../images/'
    const agentService = new AgentService()
    const { colors } = useTheme();
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    console.log(data.date_fin_appel)
    const handleValidPrixdebut = (val) => {
        if (val.trim().length >= 1) {
            setData({
                ...data,
                isValidPrix_debut: true
            });
        } else {
            setData({
                ...data,
                isValidPrix_debut: false
            });
        }
    }
    const handleValidNom = (val) => {
        if (val.trim().length >= 1) {
            setData({
                ...data,
                isValidNom: true
            });
        } else {
            setData({
                ...data,
                isValidNom: false
            });
        }
    }
    const handleValidEmail = (val) => {
        const isValid = emailValidator.validate(val);
        if (isValid) {
            setData({
                ...data,
                isValidEmail: true
            });
        } else {
            setData({
                ...data,
                isValidEmail: false
            });
        }
    };


    const handleValidFonction = (val) => {
        if (val.trim().length >= 1) {
            setData({
                ...data,
                isValidFonction: true
            });
        } else {
            setData({
                ...data,
                isValidFonction: false
            });
        }
    };

    const handleValidAdresse = (val) => {
        if (val.trim().length >= 1) {
            setData({
                ...data,
                isValidAdresse: true
            });
        } else {
            setData({
                ...data,
                isValidAdresse: false
            });
        }
    };

    const handleValidMatricule = (val) => {
        if (val.trim().length >= 1) {
            setData({
                ...data,
                isValidMatricule: true
            });
        } else {
            setData({
                ...data,
                isValidMatricule: false
            });
        }
    };
    const handleValidPrivilege = (val) => {
        if (val.trim().length >= 1) {
            setData({
                ...data,
                isValidPrivilege: true
            });
        } else {
            setData({
                ...data,
                isValidPrivilege: false
            });
        }
    };
    const PrixDebutChange = (val) => {
        if (val.trim().length >= 1) {
            setData({
                ...data,
                prix_debut_municipalite: val,
                Change_prix_debut: true,
                isValidPrix_debut: true,
            });
        } else {
            setData({
                ...data,
                prix_debut_municipalite: val,
                Change_prix_debut: false,
                isValidPrix_debut: false,
            });
        }
    };

    const NomChange = (val) => {
        if (val.trim().length >= 1) {
            setData({
                ...data,
                nom_offre: val,
                Change_nom_municipalite: true,
                isValidNom: true,
            });
        } else {
            setData({
                ...data,
                nom_offre: val,
                Change_nom_municipalite: false,
                isValidNom: false,
            });
        }
    };

    const EmailChange = (val) => {
        const isValid = emailValidator.validate(val);
        if (isValid) {
            setData({
                ...data,
                email_municipalite: val,
                Change_email_municipalite: true,
                isValidEmail: true,
            });
        } else {
            setData({
                ...data,
                email_municipalite: val,
                Change_email_municipalite: false,
                isValidEmail: false,
            });
        }
    };

    const PasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password_municipalite: val,
                isValidPassword: true,
            });
        } else {
            setData({
                ...data,
                password_municipalite: val,
                isValidPassword: false,
            });
        }
    };

    const FonctionChange = (val) => {
        if (val.trim().length >= 1) {
            setData({
                ...data,
                fonction_municipalite: val,
                Change_fonction_municipalite: true,
                isValidFonction: true,
            });
        } else {
            setData({
                ...data,
                fonction_municipalite: val,
                Change_fonction_municipalite: false,
                isValidFonction: false,
            });
        }
    };

    const TelephoneChange = (val) => {
        if (val.trim().length >= 1) {
            setData({
                ...data,
                telephone_municipalite: val,
                Change_telephone_municipalite: true,
                isValidTelephone: true,
            });
        } else {
            setData({
                ...data,
                telephone_municipalite: val,
                Change_telephone_municipalite: false,
                isValidTelephone: false,
            });
        }
    };

    const AdresseChange = (val) => {
        if (val.trim().length >= 1) {
            setData({
                ...data,
                adresse_municipalite: val,
                Change_adresse_municipalite: true,
                isValidAdresse: true,
            });
        } else {
            setData({
                ...data,
                adresse_municipalite: val,
                Change_adresse_municipalite: false,
                isValidAdresse: false,
            });
        }
    };
    const PrivilegeChange = (val) => {
        if (val.trim().length >= 1) {
            setData({
                ...data,
                privilege_municipalite: val,
                Change_privilege_municipalite: true,
                isValidPrivilege: true,
            });
        } else {
            setData({
                ...data,
                privilege_municipalite: val,
                Change_privilege_municipalite: false,
                isValidPrivilege: false,
            });
        }
    };

    const MatriculeChange = (val) => {
        if (val.trim().length >= 1) {
            setData({
                ...data,
                matricule_municipalite: val,
                Change_matricule_municipalite: true,
                isValidMatricule: true,
            });
        } else {
            setData({
                ...data,
                matricule_municipalite: val,
                Change_matricule_municipalite: false,
                isValidMatricule: false,
            });
        }
    }
    const AddNewAgent = async (valeur) => {
        try {
            const response = await agentService.AddNewAgent(valeur)
            Alert.alert('جيد ', 'لقد تم اضافة هذا العون بنجاح', [
                {
                    text: 'خروج',
                    onPress: () => navigation.goBack()
                }
            ]);
        } catch (err) {
            Alert.alert('لم نتمكن من اضافة هذا العون', 'الرجاء اعادة المحاولة', [
                { text: 'حسنا' }
            ]);
        }
    }
    const Confirmer = () => {
        if (data.isValidPrenom && data.isValidNom && data.isValidEmail && data.isValidPassword && data.isValidAdresse && data.isValidMatricule && data.isValidTelephone && data.isValidPrivilege && data.isValidFonction) {

            const data1 = {
                "nom_offre": data.nom_offre,
                "prenom_municipalite": data.prenom_municipalite,
                "email_municipalite": data.email_municipalite,
                "password_municipalite": data.password_municipalite,
                "telephone_municipalite": data.telephone_municipalite,
                "fonction_municipalite": data.fonction_municipalite,
                "privilege_municipalite": data.privilege_municipalite,
                "matricule_municipalite": data.matricule_municipalite,
                "adresse_municipalite": data.adresse_municipalite
            }
            const liste = ["salah.dridi@fsb.ucar.tn", "nousrkawana029@gmail.com", "salahdridi993@gmail.com"]
            if (liste.includes(data.email_municipalite)) {
                Alert.alert(
                    "تاكيد ",
                    "هل انت متاكد من اضافة هذا العون ؟",
                    [
                        {
                            text: "لا",
                            style: "cancel"
                        },
                        { text: "نعم", onPress: () => AddNewAgent(data1) }
                    ]
                );
            }
            else {
                Alert.alert('بيانات خاطئة', 'البريد الالكتروني غير متاح', [
                    { text: 'حسنا' }
                ]);
            }
        }
        else {
            Alert.alert('بيانات غير مكتملة', 'الرجاء ملا جميع الفراغات', [
                { text: 'حسنا' }
            ]);
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ height: height * 0.1, backgroundColor: Colors.primary, flexDirection: 'row', alignItems: "center" }}>
                <View style={{ width: width * 0.7, height: "100%", flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ width: "25%", height: "80%" }}>
                        <Image source={require(lienimage + 'logoplage.png')} style={{ width: '100%', height: '100%', borderRadius: 70 }} />
                    </View>
                    <View style={{ flex: 1, margin: 10, }}>
                        <Text style={{ fontSize: 25, color: Colors.couleur1, fontWeight: 'bold', }}>بلدية {municipalite.nom} </Text>
                    </View>
                </View>
                <View style={{ width: width * 0.3, height: "70%", alignItems: "center" }}>
                    <Image source={require(lienimage + 'drapeau-tunisie.jpg')} style={{ width: '60%', height: '100%' }} />
                </View>
            </View>
            <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>إضافة طلبات عروض</Text>

            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer, {
                    backgroundColor: colors.background
                }]}
            >
                <ScrollView style={{ margin: 10 }}>
                    <Text style={[styles.text_footer, {
                        color: colors.text
                    }]}>الفصل</Text>
                    <View style={styles.action}>
                        <TextInput
                            placeholder="اضافة فصل"
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color: colors.text
                            }]}
                            autoCapitalize="none"
                            onChangeText={(val) => NomChange(val)}
                            onEndEditing={(e) => handleValidNom(e.nativeEvent.text)}
                        />
                        {data.Change_nom_municipalite ?
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                            : null}
                    </View>
                    {data.isValidNom ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>لا يوجد فصل</Text>
                        </Animatable.View>
                    }

                    <Text style={[styles.text_footer, {
                        color: colors.text
                    }]}>السعر الافتتاحي</Text>
                    <View style={styles.action}>
                        <TextInput
                            placeholder="اضافة سعر"
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color: colors.text
                            }]}
                            autoCapitalize="none"
                            onChangeText={(val) => PrixDebutChange(val)}
                            onEndEditing={(e) => handleValidPrixdebut(e.nativeEvent.text)}
                        />
                        {data.Change_prix_debut ?
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                            : null}
                    </View>
                    {data.isValidPrix_debut ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>لا يوجد سعر</Text>
                        </Animatable.View>
                    }
                    <Text style={[styles.text_footer, {
                        color: colors.text
                    }]}>اخر اجل لقبول العروض</Text>
                    <View >
                        <TouchableOpacity
                            style={{
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexDirection: "row",
                                alignSelf: "flex-end"
                            }}
                            onPress={() => showDatePickerModal()}
                        >
                            <Text style={{ marginRight: 10, color: Colors.primary, fontSize: 15 }}>إضافة تاريخ</Text>
                            <Icons.MaterialIcons name='date-range' size={25} color={Colors.primary} />
                        </TouchableOpacity>
                        {showDatePicker && (
                            <DateTimePicker
                                value={selectedDate}
                                mode="date"
                                display="default"
                                onChange={handleDateChange}
                                locale="ar"
                            />
                        )}
                    </View>


                    <Text>{selectedDate ? formatDate(selectedDate) : ''}</Text>
                    <Text style={[styles.text_footer, {
                        color: colors.text
                    }]}>مدة التسويغ</Text>
                    <View >
                        <TouchableOpacity
                            style={{
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexDirection: "row",
                                alignSelf: "flex-end"
                            }}
                            onPress={() => showDatePickerModal()}
                        >
                            <Text style={{ marginRight: 10, color: Colors.primary, fontSize: 15 }}>من</Text>
                            <Icons.MaterialIcons name='date-range' size={25} color={Colors.primary} />
                        </TouchableOpacity>
                        {showDatePicker && (
                            <DateTimePicker
                                value={selectedDate}
                                mode="date"
                                display="default"
                                onChange={handleDateChange}
                                locale="ar"
                            />
                        )}
                    </View>


                    <Text>{selectedDate ? formatDate(selectedDate) : ''}</Text>
                    <View >
                        <TouchableOpacity
                            style={{
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexDirection: "row",
                                alignSelf: "flex-end"
                            }}
                            onPress={() => showDatePickerModal()}
                        >
                            <Text style={{ marginRight: 10, color: Colors.primary, fontSize: 15 }}>الى</Text>
                            <Icons.MaterialIcons name='date-range' size={25} color={Colors.primary} />
                        </TouchableOpacity>
                        {showDatePicker && (
                            <DateTimePicker
                                value={selectedDate}
                                mode="date"
                                display="default"
                                onChange={handleDateChange}
                                locale="ar"
                            />
                        )}
                    </View>
                    <Text>{selectedDate ? formatDate(selectedDate) : ''}</Text>
                    <Text style={[styles.text_footer, {
                        color: colors.text
                    }]}>تاريخ و توقيت و مكان فتح العروض</Text>
                    <View >
                        <TouchableOpacity
                            style={{
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexDirection: "row",
                                alignSelf: "flex-end"
                            }}
                            onPress={() => showDatePickerModal()}
                        >
                            <Text style={{ marginRight: 10, color: Colors.primary, fontSize: 15 }}>التاريخ</Text>
                            <Icons.MaterialIcons name='date-range' size={25} color={Colors.primary} />
                        </TouchableOpacity>
                        {showDatePicker && (
                            <DateTimePicker
                                value={selectedDate}
                                mode="date"
                                display="default"
                                onChange={handleDateChange}
                                locale="ar"
                            />
                        )}
                    </View>
                    <Text>{selectedDate ? formatDate(selectedDate) : ''}</Text>
                    <View>
                        <Button title="Select Time" onPress={showDatePicker1} />
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="time"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                        {selectedTime && <Text>Selected Time: {selectedTime.toLocaleTimeString()}</Text>}
                    </View>
                    <Text style={[styles.text_footer, {
                        color: colors.text
                    }]}>المكان</Text>
                    <View style={styles.action}>
                        <TextInput
                            placeholder="اضافة مكان"
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color: colors.text
                            }]}
                            autoCapitalize="none"
                            onChangeText={(val) => AdresseChange(val)}
                            onEndEditing={(e) => handleValidAdresse(e.nativeEvent.text)}
                        />
                        {data.Change_adresse_municipalite ?
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                            : null}
                    </View>
                    {data.isValidAdresse ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>لا يوجد مكان</Text>
                        </Animatable.View>
                    }
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.button2} onPress={() => navigation.goBack()}>
                            <Text style={styles.buttonText}>خروج</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => Confirmer()}>
                            <Text style={styles.buttonText}>تاكيد</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Animatable.View>
        </View>
    );
};

export default AddNewOffre;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary
    },
    header: {
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    //'white'
    //Colors.couleur1
    text_header: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        margin: 10
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        marginTop: 10
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        margin: 10,
        flex: 1
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    button2: {
        backgroundColor: Colors.red,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    buttonText2: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
});
