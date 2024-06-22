import React from "react";
import { View, Image } from "react-native";
import { useUser } from "@clerk/clerk-expo";

export default function Header() {
    const { user } = useUser();

    return (
        <View>
            {user ? (
                <View>
                    <Image 
                        source={{ uri: user.imageUrl }}
                        style={{
                            width: 45,
                            height: 45,
                            borderRadius: 99
                        }}
                    />
                </View>
            ) : (
                // Optionally, you can add a placeholder here
                <View style={{ width: 45, height: 45, borderRadius: 99, backgroundColor: '#ccc' }} />
            )}
        </View>
    );
}
