import React,{Component} from 'react';
import {View, Text,Image,FlatList,Button,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getDetailsId} from '../../redux/actions/actions';

 class createElement extends Component  {


     render(){
        let data = [];
            
        Object.keys(this.props.state.data).map((key)=>data.push(this.props.state.data[key]))
        let ArrayKeys = [];
        if(this.props.state.category == 'all'){
            ArrayKeys = data;
        }else {
            ArrayKeys = data.map(item => {
                const newData = item.category[this.props.state.category]? item: null;
                return newData;
            })
        }
        const prop = this.props;
        const element = <FlatList
                            data={ArrayKeys}
                            renderItem={({item})=>{
                                if(!item){
                                    return false
                                }
                                const { img, date, title,category,id} = item;
                                let key = Object.keys(category);
                                return (
                                    <View  style={styles.itemConteiner}>
                                        <Image 
                                        source={{uri:img ? img : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAK8AYoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD06iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKK4DUdO1PxH4o1yC21m5s200Qi2RHKplkJOcc9R16/WgDv6K8x0j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ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKrf2jYf8/tt/39X/Gj+0bD/n9tv+/q/wCNK6L9nPsyzRVb+0bD/n9tv+/q/wCNH9o2H/P7bf8Af1f8aLoPZz7Ms0VW/tGw/wCf22/7+r/jR/aNh/z+23/f1f8AGi6D2c+zLNFVv7RsP+f22/7+r/jR/aNh/wA/tt/39X/Gi6D2c+zLNFVv7RsP+f22/wC/q/40f2jYf8/tt/39X/Gi6D2c+zLNFVv7RsP+f22/7+r/AI0f2jYf8/tt/wB/V/xoug9nPsyzRVb+0bD/AJ/bb/v6v+NH9o2H/P7bf9/V/wAaLoPZz7Ms0VW/tGw/5/bb/v6v+NH9o2H/AD+23/f1f8aLoPZz7Ms0VW/tGw/5/bb/AL+r/jR/aNh/z+23/f1f8aLoPZz7Ms0VW/tGw/5/bb/v6v8AjR/aNh/z+23/AH9X/Gi6D2c+zLNFVv7RsP8An9tv+/q/40f2jYf8/tt/39X/ABoug9nPsyzRVb+0bD/n9tv+/q/40f2jYf8AP7bf9/V/xoug9nPsyzRVb+0bD/n9tv8Av6v+NH9o2H/P7bf9/V/xoug9nPsyzRVb+0bD/n9tv+/q/wCNH9o2H/P7bf8Af1f8aLoPZz7Ms0VW/tGw/wCf22/7+r/jR/aNh/z+23/f1f8AGi6D2c+zLNFVv7RsP+f22/7+r/jR/aNh/wA/tt/39X/Gi6D2c+zLNFVv7RsP+f22/wC/q/40f2jYf8/tt/39X/Gi6D2c+zLNFVv7RsP+f22/7+r/AI0f2jYf8/tt/wB/V/xoug9nPsyzRVb+0bD/AJ/bb/v6v+NH9o2H/P7bf9/V/wAaLoPZz7Ms0VW/tGw/5/bb/v6v+NH9o2H/AD+23/f1f8aLoPZz7Ms0VW/tGw/5/bb/AL+r/jR/aNh/z+23/f1f8aLoPZz7Ms0VW/tGw/5/bb/v6v8AjR/aNh/z+23/AH9X/Gi6D2c+zLNFVv7RsP8An9tv+/q/40f2jYf8/tt/39X/ABoug9nPsyzRVb+0bD/n9tv+/q/40f2jYf8AP7bf9/V/xoug9nPsyzRVb+0bD/n9tv8Av6v+NH9o2H/P7bf9/V/xoug9nPszzyiiiuE+sCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooq/ooB1SLIB4bqP9k0JXdiZy5YuXYoUVoxSSXySG8mPkQLvbagBJzgAce9BtrMNBL+/aCfKqu4BlYEA5OCCOafKR7W2jWpnUVqS2liklyf8ASBHavsYbgS5yQMccdD60+30yCaYsrSyQtbmaMAhWyGxtOQR60+Vi+sRSuzIorWk0qMTxDdJGjRNLIr4ZkVfccHNVbm3g+yLdWpk8suY2WTBIOMjkdsUnFoca0ZWsU6KKKRqFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVNaXDWtysyKGK54PuCP61DRQJpNWZPa3LW7P8AIsiSLtdG6MKdNeNIYQsaRxw/cRc465PJ5qtRRdicIt3Li37edctJEkiXLbnjOcZzkYI5709dTYSsTBGYzD5IiGQAuc+uc+9UKKfMyXSg+he/tJ1aLyoY0jiDDy+SGDfezk96inuvNhWGOJIYlYttUk5J7nJqtRRdjVOKd0gooopFhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/9k=s' }}
                                        style={styles.image}
                                        />
                                        <View style={styles.textData}>
                                            <Text style={styles.itemText}>{title}</Text>
                                            <Text style={styles.itemText}>{date}</Text>
                                            <Text style={styles.itemText}>Категорії:{key.map(item => {
                                               return category[item]? `${item}, `: null
                                            })}</Text>
                                        </View>
                                        <Button
                                            title='більше'
                                            onPress={() => {
                                                prop.getDetailsId(id);
                                                prop.navigation.push('Details')
                                                }}/>
                                    </View>
                                )}}
                            keyExtractor={(item, index) => `${index} ${Math.random() * 1000}`}
                            />
        return element
     }
            
}
const styles = StyleSheet.create({
    conteiner : {
        flex: 1,
    },
    itemConteiner: {
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        borderColor: 'rgba(46, 0, 250, 0.61)',
        borderWidth: 3,
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        minHeight: 110
    },
    image: {
        width: 100,
        height: 70,
        borderRadius: 20,
    },
    textData: {
        padding: 10,
        width: '50%'
    },
    itemText: {
        fontSize: 13,
        letterSpacing: 2.5
    }
})
mapStateToProps = (state) => {
    return {
        state: state.first
    }
}
mapDispatchToProps = (dispatch) => {
    return { 
        getDetailsId: (item) => dispatch(getDetailsId(item)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(createElement) ;