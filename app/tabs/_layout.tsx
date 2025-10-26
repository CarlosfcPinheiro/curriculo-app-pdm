import { Tabs } from "expo-router";
import { Briefcase, FolderOpen, GraduationCap, Home, User } from 'lucide-react-native';

export default function TabLayout(){
    return (
        <Tabs 
        screenOptions={{
            tabBarActiveTintColor: "#3498db",
            tabBarInactiveTintColor: "#8e8e93",
            tabBarStyle: {
                backgroundColor: "#1a1a1a",
                borderTopColor: "#333"
            },
            headerShown: false
        }}>
            <Tabs.Screen
                name="home/index"
                options={{
                    title:"Home",
                    tabBarIcon: ({ color, focused }) => (
                        <Home 
                            color={color} 
                            size={24} 
                            fill={focused ? color : "transparent"}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="sobre/index"
                options={{
                    title:"Sobre",
                    tabBarIcon: ({ color, focused }) => (
                        <User 
                            color={color} 
                            size={24} 
                            fill={focused ? color : "transparent"}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="academico/index"
                options={{
                    title:"Acadêmico",
                    tabBarIcon: ({ color, focused }) => (
                        <GraduationCap 
                            color={color} 
                            size={24} 
                            fill={focused ? color : "transparent"}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="projetos/index"
                options={{
                    title:"Projetos",
                    tabBarIcon: ({ color, focused }) => (
                        <FolderOpen 
                            color={color} 
                            size={24} 
                            fill={focused ? color : "transparent"}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="profissional/index"
                options={{
                    title:"Profissional",
                    tabBarIcon: ({ color, focused }) => (
                        <Briefcase 
                            color={color} 
                            size={24} 
                            fill={focused ? color : "transparent"}
                        />
                    )
                }}
            />
        </Tabs>
    )
}