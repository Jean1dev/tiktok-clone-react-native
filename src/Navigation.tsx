import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/home';
import { Entypo, Feather, AntDesign } from '@expo/vector-icons';
import Button from './componentes/button';

const Tab = createBottomTabNavigator()

const Navigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    style: {
                        backgroundColor: '#000',
                        borderTopColor: 'rgba(255, 255, 0.3)'
                    },
                    activeTintColor: '#fff'
                }}
            >
                <Tab.Screen name="home" component={Home} options={{
                    tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />
                }} />
                <Tab.Screen name="discover" component={Home} options={{
                    tabBarIcon: ({ color }) => <Feather name="search" size={24} color={color} />
                }}/>
                <Tab.Screen name="new" component={Home} options={{
                    tabBarIcon: ({ color }) => <Button/>,
                    title: ''
                }}/>
                <Tab.Screen name="inbox" component={Home} options={{
                    tabBarIcon: ({ color }) => <Entypo name="chat" size={24} color={color} />
                }}/>
                <Tab.Screen name="profile" component={Home} options={{
                    tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;