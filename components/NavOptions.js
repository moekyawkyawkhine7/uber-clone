import React from 'react'
import { Image, View, Text, FlatList, TouchableOpacity } from 'react-native'
// lib
import { Icon } from "react-native-elements";
import tw from "twrnc";

const NavOptions = () => {

    const data = [
        {
            id: 1,
            title: "Get a ride",
            image: "https://images.ctfassets.net/q8mvene1wzq4/2DS1wcFwCBPt7BDZDnC2Wo/846cc676fe7004f74dc4794a198c9de5/lyft_icon_2x.png?w=&q=60&fm=",
            screen: ""
        },
        {
            id: 2,
            title: "Order food",
            image: "https://links.papareact.com/28w",
            screen: ""
        }
    ]

    return (
        <FlatList
            horizontal
            data={data}
            renderItem={({ item }) => (
                <TouchableOpacity style={tw`bg-gray-200 rounded-md pl-3 mr-4`}>
                    <View style={tw`px-3 py-5`}>
                        <Image
                            style={{ width: 120, height: 120, resizeMode: "contain" }}
                            source={{
                                uri: item.image
                            }}
                        />
                        <Text
                            style={tw`font-semibold text-lg my-3`}
                        >
                            {item.title}
                        </Text>
                        <Icon
                            style={tw`p-2 bg-black rounded-full w-10`}
                            type="antdesign"
                            name="arrowright"
                            color="white"
                        />
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
        />
    )
}

export default NavOptions