import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView, Image} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default class CustomSidebarMenu extends Component{
    constructor(props){
        super(props);
        this.state = {
            light_theme: true,
        }
    }
    
    componentDidMount(){
        let theme;
        firebase
            .database()
            .ref("/user/" + firebase.auth().currentUser.uid)
            .on("value", function(snapshot){
                theme = snapshot.val().current_theme;
            } )
            this.setState({ light_theme: theme === "light"});
    }
    render(){
        let props = this.props;
        return(
            <View style={{ 
                flex:1,
                backgroundColor: this.state.light_theme ? "white" : "#15193c"
                
                }}>
                 <Image
                    source={require("../assets/logo.png")}
                    style={styles.sideMenuProfileIcon}
                >
                    
                </Image>
                <DrawerContentScrollView {...PROPS}>
                    <DrawerItemList {...props}></DrawerItemList>

                </DrawerContentScrollView>
            </View>
        )
    }
}


const style = StyleSheet.create({
    sideMenuProfileIcon: {
        width: RFValue(140),
        height: RFValue(140),
        borderRadius: RFValue(70),
        alignSelf: "center",
        marginTop: RFValue(60),
        resizeMode: "contain"
      }
});