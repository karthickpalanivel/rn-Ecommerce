import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { categoriesData } from '../../../data/CategoriesData'

const Categories = () => {
  return (
    <View>
      {
        categoriesData.map(item => {
            <View key={item._id}>
                <TouchableOpacity>
                    <Text>{item.name}</Text>
                </TouchableOpacity>
            </View>
        })
      }
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})