import React, { Component } from "react";
import { Container,Content, List, ListItem, Text, Left,Right,Icon } from 'native-base';
export default class ToutsCategories extends Component {
  render() {
    return (
        <Container>
        <Content>
          <List>
            <ListItem>
                <Left>
              <Text>Coiffure Homme</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
                <Left>
              <Text>Coiffure Femme</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
                <Left>
              <Text>Coloration cheveux Femme</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
                <Left>
              <Text>Brushing</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
                <Left>
              <Text>VOIR TOUT</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
<br/>