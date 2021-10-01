import React, {useEffect, useState} from 'react';
import {API, graphqlOperation} from 'aws-amplify';
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {withTheme} from 'react-native-paper';
import {
  ButtonPrimary,
  ButtonWhiteGreyBorder,
  CheckIcon,
  ChevronRightIcon,
  HorizontalLinearGradient,
  Logo,
} from '../_components';
import {styles} from '../_helpers';
import {listCategories} from '../graphql/queries';
import {useDispatch, useSelector} from 'react-redux';
import {appActions} from '../_actions';

const numColumns = 3;
const screenWidth = Dimensions.get('window').width;
const tileSize = (screenWidth - 30) / numColumns;

const renderItem = ({item, index, selectedCategories, onClick}) => {
  const i = selectedCategories.findIndex((s: any) => s.id === item.id);
  const isIn = i > -1;
  return (
    <View style={{height: 70, width: tileSize, padding: 5}}>
      <TouchableOpacity
        onPress={() => {
          const elts = [...selectedCategories];
          if (isIn) {
            elts.splice(i, 1);
          } else {
            elts.push(item);
          }
          onClick(elts);
        }}>
        <View
          style={{
            height: 45,
            width: tileSize - 35,
            borderRadius: 5,
            backgroundColor: '#ccc',
          }}>
          <Image
            source={{uri: item.image}}
            style={{height: '100%', width: '100%', borderRadius: 5}}
          />
          {isIn && (
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: tileSize - 35 - 20,
                  backgroundColor: 'rgba(91, 91, 91, .6)',
                  padding: 5,
                  justifyContent: 'space-between',
                  borderRadius: 10,
                }}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>
                  {item.name}
                </Text>
                <CheckIcon color={'#fff'} />
              </View>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const Categories = withTheme((props: any) => {
  const dispatch = useDispatch();
  const model = useSelector(state => (state as any).app.model.clone());
  const [freeze, setFreeze] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(
    model?.data?.usercategories || [],
  );

  const fetchCategories = async () => {
    try {
      const categoriesData = await API.graphql(
        graphqlOperation(listCategories),
      );
      const cats = (categoriesData as any).data.listCategories.items;
      setCategories(cats);
    } catch (err) {
      console.log('error fetching categories');
    }
  };
  useEffect(() => {
    fetchCategories().then(() => setFreeze(false));
  }, []);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          overflow: 'hidden',
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}>
        <HorizontalLinearGradient>
          <View style={{flex: 1}}>
            <View
              style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#fff'}}>Step</Text>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('Register');
                  }}>
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 4,
                    }}></View>
                </TouchableOpacity>

                <View
                  style={{
                    width: 16,
                    height: 8,
                    borderWidth: 1,
                    borderColor: '#fff',
                    borderRadius: 4,
                    backgroundColor: '#fff',
                  }}></View>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('Friends');
                  }}>
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 4,
                    }}></View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 3,
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    props.setRoute({
                      key: 'friends',
                      params: {
                        ...props.appRoute.params,
                        selectedCategories,
                      },
                    });
                  }}>
                  <View
                    style={{
                      justifyContent: 'flex-end',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: '#fff', fontWeight: '500'}}>Skip</Text>
                    <View style={{width: 10}}></View>
                    <ChevronRightIcon style={{color: '#fff'}} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flex: 2,
              }}>
              <Logo />
            </View>
            <View
              style={{
                flex: 1,
              }}></View>
          </View>
        </HorizontalLinearGradient>
      </View>
      <View style={[styles.content]}>
        <View
          style={{
            flex: 5,
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 10,
            }}>
            <Text
              style={[
                styles.title,
                {textAlign: 'center', marginTop: 40, marginBottom: 10},
              ]}>
              {freeze ? 'Chargement ...' : 'Choose your categories'}
            </Text>
          </View>

          {!freeze && (
            <>
              <View
                style={{
                  width: '100%',
                  height: 300,
                }}>
                <FlatList
                  data={categories}
                  renderItem={({item, index}) =>
                    renderItem({
                      item,
                      index,
                      selectedCategories,
                      onClick: (data: any) => setSelectedCategories(data),
                    })
                  }
                  numColumns={numColumns}
                />
              </View>
              <View style={{marginTop: 30}}>
                <ButtonWhiteGreyBorder
                  onPress={() => {
                    Alert.alert(
                      'Info !',
                      "There's no more categories availlable",
                    );
                  }}
                  title={'See more'}
                />
              </View>
              <View style={{marginTop: 10}}>
                <ButtonPrimary
                  onPress={() => {
                    model.updateValue('usercategories', selectedCategories);
                    dispatch(appActions.replaceModelRequest(model));
                    props.navigation.navigate('Friends');
                  }}
                  title={'Next step  >'}
                />
              </View>
            </>
          )}
        </View>
        <View
          style={{
            flex: 1,
          }}></View>
      </View>
    </View>
  );
});
