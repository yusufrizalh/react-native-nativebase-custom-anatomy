/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, Image, Alert, StyleSheet, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';

// import komponen dari NativeBase
import {
  Container,
  Header,
  Title,
  Left,
  Right,
  Button,
  FooterTab,
  Footer,
  Content,
  Text,
  Root,
  ActionSheet,
  Thumbnail,
  Card,
  CardItem,
  Body,
} from 'native-base';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Root>
        <Container>
          <Header>
            <Left primary>
              <Icon name="menu" type="ionicon" color="#ffffff" />
            </Left>
            <Body>
              <Title>Learn Native Base</Title>
            </Body>
          </Header>

          <Content padder>
            <Card>
              <CardItem header>
                <Text>Native Base</Text>
              </CardItem>
              <CardItem>
                <Body style={{flex: 1, alignItems: 'center', height: 250}}>
                  <Image
                    source={require('./assets/image1.jpg')}
                    style={{
                      flex: 1,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text>Learn Community Components with Native Base</Text>
                </Body>
              </CardItem>
              <CardItem footer>
                <Text>by Inixindo</Text>
              </CardItem>
            </Card>
          </Content>
          <Footer>
            <FooterTab>
              <Button>
                <Icon name="home" type="ionicon" color="#ffffff" />
                <Text>Home</Text>
              </Button>
              <Button>
                <Icon name="camera" type="ionicon" color="#ffffff" />
                <Text>Gallery</Text>
              </Button>
              <Button>
                <Icon name="book" type="ionicon" color="#ffffff" />
                <Text>Contact</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </Root>
    );
  }
}
