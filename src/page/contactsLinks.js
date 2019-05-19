import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,TextInput,Linking} from 'react-native';

export default class  ContactsLinks extends Component {

    state = {
        contacts: {
            telegrame: '',
            viber: '',
            inst: '',
            site: '',
        },
        newContacts: {
            telegrame: ' ',
            viber: ' ',
            inst: ' ',
            site: ' ',
        },
    }

    changeText = (data,name) => {
        const {newContacts,contacts} = this.state;
        this.setState({contacts: {...contacts, [name]:data }});
        this.validateData()

    }

    onMainComponent = (data) => {
        this.props.saveDataContacts(data);
    }

    validateData = () => {
        const {contacts,newContacts} = this.state;
        Object.keys(newContacts).forEach(item => {
            const arrayForValidate = contacts[item].split('//');
            if(arrayForValidate[0] !== 'http:' && arrayForValidate[0] !== 'https:'){
                if(newContacts[item] !== '' && contacts[item] !== ''){
                    this.setState({newContacts: {...newContacts, [item]: '' }})
                    }
            }else {
                if(newContacts[item] !== contacts[item]){
                    this.setState({newContacts: {...newContacts, [item]: contacts[item]}});
                    this.onMainComponent({...newContacts,[item]: contacts[item]})

                    }
            }
        })
    }

    componentDidUpdate(){
        this.validateData();
    }

    render(){
        const { newContacts } = this.state;
        const {contactsItem, TextInputContacts,contactsItemView,contactsItemViewText,TextInputContactsError,noCorrectData} = styles;
        return (
        <React.Fragment>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={contactsItem}>Telegram: </Text>
                            <TouchableOpacity style={contactsItemView}
                                onPress={() => Linking.openURL('https://ru.telegram-store.com/blog/kak-skopirovat-ssylku-v-telegramme/')} >
                                <Text style={contactsItemViewText}>Як взяти ссилку в Telegram</Text>
                            </TouchableOpacity>
                        </View>
                        <TextInput
                            maxLength={50}
                            style={newContacts.telegrame?TextInputContacts:[TextInputContacts,TextInputContactsError]}
                            multiline = {true}
                            placeholder='https://t.me/***'
                            textContentType='URL'
                            value={this.state.contacts.telegrame}
                            onChangeText={(telegrame) => this.changeText(telegrame,'telegrame')}/>
                        {newContacts.telegrame?null
                                :<Text style={noCorrectData}>*Введіть коректні данні</Text>}
                            
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={contactsItem}>Instagram: </Text>
                            <TouchableOpacity style={contactsItemView}
                                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=ssQ01eWlVlU')} >
                                <Text style={contactsItemViewText}>Як взяти ссилку в Instagram</Text>
                            </TouchableOpacity>
                        </View>
                        <TextInput
                            maxLength={50}
                            style={newContacts.inst?TextInputContacts:[TextInputContacts,TextInputContactsError]}
                            multiline = {true}
                            placeholder='https://www.instagram.com/***'
                            textContentType='URL'
                            value={this.state.contacts.inst}
                            onChangeText={(inst) => this.changeText(inst,'inst')}/>
                        {newContacts.inst?null
                                :<Text style={noCorrectData}>*Введіть коректні данні</Text>}

                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={contactsItem}>Viber: </Text>
                            <TouchableOpacity style={contactsItemView}
                                onPress={() => Linking.openURL('https://www.youtube.com/watch?v=JMtG8p4M9ws')} >
                                <Text style={contactsItemViewText}>Як взяти ссилку в Viber</Text>
                            </TouchableOpacity>
                        </View>
                        <TextInput
                            maxLength={50}
                            style={newContacts.viber?TextInputContacts:[TextInputContacts,TextInputContactsError]}
                            multiline = {true}
                            placeholder='https://viber.com/***'
                            textContentType='URL'
                            value={this.state.contacts.viber}
                            onChangeText={(viber) => this.changeText(viber,'viber')}/>
                        {newContacts.viber?null
                                :<Text style={noCorrectData}>*Введіть коректні данні</Text>}
                        
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={contactsItem}>Сайт: </Text>
                        </View>
                        <TextInput
                            maxLength={50}
                            style={newContacts.site?TextInputContacts:[TextInputContacts,TextInputContactsError]}
                            multiline = {true}
                            placeholder='https://www.google.com/'
                            textContentType='URL'
                            value={this.state.contacts.site}
                            onChangeText={(site) => this.changeText(site,'site')}/>
                            {newContacts.site?null
                                :<Text style={noCorrectData}>*Введіть коректні данні</Text>}
        </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    TextInputContacts : {
        width: '85%',
        borderColor: 'rgba(0, 0, 0, 0.315)',
        borderWidth: 2.5,
        alignSelf: 'center',
        textAlign: 'center',
        paddingVertical: 1,
        fontSize: 18,
        marginBottom: 10
    },
    contactsItem: {
        marginBottom: 8,
        marginLeft: 15,
        letterSpacing: 2,
        color: 'black',
        fontSize: 15,
    },
    contactsItemView: {
        borderColor: 'rgba(83, 28, 28, 0.897)',
        borderWidth: 2,
        borderRadius: 3,
        marginBottom: 7
    },
    contactsItemViewText: {
        margin: 5,
        color: 'rgba(83, 28, 28, 0.897)',
        fontSize: 12,
        letterSpacing: 1
    },
    TextInputContactsError: {
        borderColor: 'red',
        borderWidth: 1.5,
    },
    noCorrectData: {
        fontSize: 14,
        color: 'red',
        position: 'relative',
        top: -10,
        alignSelf: 'center',
        letterSpacing: 2
    }
})
