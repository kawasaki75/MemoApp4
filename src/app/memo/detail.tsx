import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { router } from 'expo-router'

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const handlePress = (): void => {
  router.push('/memo/edit')
}

const Detail = (): JSX.Element => {
  return (
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2023年10月1日 10:00</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    畦地梅太郎作品の中でも山の風景を描いた作品は、1950年代後半を境に少なくなりますが、
                    この作品も風景画としては相当後期のものとなります。この頃には、年齢の問題もあり山に登る
                    ことも少なくなりましたが、自分の郷里にある石鎚山は、いつも心の中に残っていたのでしょう。
                </Text>
             </ScrollView>
            <CircleButton onPress={handlePress} style={{ top: 60, bottom: 'auto' }}>
                <Icon name='pencil' size={40} color='#ffffff' />
            </CircleButton>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justfyContents: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold'
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000000'
  }
})

export default Detail
