import React, { Fragment } from "react";
import { createStackNavigator } from '@react-navigation/stack';
// import Login from "../Screens/Login/Login";
import { Login,Signup ,LandingPage, HomePage,MainPage,DetailPage,OrderDetails} from "../Screens";
import navigationStrings from "../constants/navigationStrings";



function AuthStack(Stack) {

    return (
        <Fragment>
          <Stack.Screen name={navigationStrings.LANDING_PAGE}  options={{
                    headerShown: false
                }} component={LandingPage} />

            <Stack.Screen
                component={Login}
                options={{
                    headerShown: false
                }}
                name={navigationStrings.LOGIN}

            />
            <Stack.Screen
                component={Signup}
                options={{
                    headerShown: false
                }}
                name={navigationStrings.SIGNUP}

            />
              <Stack.Screen name={navigationStrings.HOMEPAGE}  options={{
                    headerShown: false
                }}  component={HomePage} />
                <Stack.Screen name={navigationStrings.DETAIL_PAGE}  options={{
                    headerShown: false
                }}  component={DetailPage} />
                <Stack.Screen name={navigationStrings.ORDER_DETAILS}  options={{
                    headerShown: false
                }}  component={OrderDetails} />
        </Fragment>
    )


}


export default AuthStack
