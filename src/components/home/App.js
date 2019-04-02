import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import { Grid,
         Flag,
         Icon,
         Input,
         Container,
         Header,
         Image,
         Divider,
         Label,
         Button,
         List,
         Loader,
         Dimmer,
         Placeholder,
         Segment,
         Search,
         Form,
         Checkbox,
         Table,
         Menu,
         Feed
       }
       from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
      <br/>
      <Container>
        <Grid container columns={5}>
          <Grid.Column>
            <Grid container columns={3}>
              <Grid.Column>
                <Flag name ="id"/>
              </Grid.Column>
              <Grid.Column>
                <Icon name="angle left" size="large"/>
              </Grid.Column>
              <Grid.Column>
                <Icon name="angle right" size="large"/>
              </Grid.Column>
            </Grid>
          </Grid.Column>
          <Grid.Column width={9} textAlign="left">
            <Input type="text"fluid icon="star" placeholder="search"/>
          </Grid.Column>
          <Grid.Column>
              <Header as="h3" color="red">
                <Image src="https://react.semantic-ui.com/images/avatar/large/patrick.png"/>
                  Emil Fitranshah
              </Header>
            </Grid.Column>
        </Grid>
        </Container>
        <Container textAlign="right">
          <Divider horizontal>Selamat Datang TUGAS 10</Divider>
          <Label as="a" color="teal" tag>
            Sport
          </Label>
        </Container>
        <br/>
        <Container textAlign="center">
          <p>Ini harus jadi projek website pertama yang berhasil
             Harus menjadi sebuah fortofolio untuk melamar pekerjaan
             pada perusahaan besar seperti Google, Intel dan lain.
             Saya harus berhasil menjadi seorang UI Programmer dan
             bekerja di perusahaan IT.
          </p>
          <Button color="teal" content="Tambah Ke List" icon="plus" labelPosition="left" ></Button>
        </Container>
        <Divider horizontal>Tugas 11</Divider>
        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical>Or</Divider>
            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="search"/>
                  Cari Document
                </Header>
                <Search placeholder= "search document"/>
              </Grid.Column>
              <Grid.Column verticalAlign="middle">
                <Header icon>
                  <Icon name="file pdf outline"/>
                  Tambah Document baru
                </Header>
                <Button primary>Create Document</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment>
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"/>
        </Segment>
      <Grid>
        <Grid.Column width ={5} stackable>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='medium' />
                <Placeholder.Line length='short' />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
        <Grid.Column width={7}>
          <Segment>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
             </Placeholder.Header>
             <Placeholder.Paragraph>
               <Placeholder.Line length='medium' />
               <Placeholder.Line length='short' />
             </Placeholder.Paragraph>
           </Placeholder>
          </Segment>
        </Grid.Column>
        <Grid.Column width={4}>
        <h5> Web terkait </h5>
          <List>
            <List.Item>
             <List.Icon name='linkify' />
             <List.Content>
               <a href='http://google.com'>Google</a>
             </List.Content>
             </List.Item>
             <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://Facebook.com'>Facebook</a>
              </List.Content>
              </List.Item>
              <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
               <a href='http://react.semantic-ui.com'>Semantic UI</a>
              </List.Content>
              </List.Item>
              <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
               <a href='http://niomic.com'>Niomic</a>
              </List.Content>
              </List.Item>
          </List>
        </Grid.Column>
      </Grid>
      <Divider horizontal>Tugas 12</Divider>
      <Header as='h2' color="teal" textAlign="center">
       <Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png"/>
        Member Login
      </Header>
      <Grid columns={3} container textAlign="center">
        <Grid.Column >
          <Segment stacked>
            <Form>
              <Input fluid icon="user" iconPosition="left" placeholder="First Name" />
              <br/>
                <Input fluid icon="lock" iconPosition="left" placeholder="Password" />
              <br/>
              <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
              </Form.Field>
                <Button fluid color="teal" type='submit'>Login</Button>
            </Form>
          </Segment>
          <Segment secondary>
            Anda tidak punya akun? Silahkan <a href='http://niomic.com'>Register</a>
          </Segment>
        </Grid.Column>
      </Grid>
      <Divider horizontal>Tugas 13</Divider>
      <Container width="5">
        <Segment.Group>
          <Segment textAlign="right">
            <Search placeholder="search"/>
            <Table celled size="small">
              <Table.Header>
                <Table.Row textAlign="center">
                  <Table.HeaderCell>Nama Document</Table.HeaderCell>
                  <Table.HeaderCell width="5">Jenis File</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Label ribbon>Panduan Belajar Javascript</Label>
                  </Table.Cell>
                  <Table.Cell textAlign="center">PDF</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Belajar CSS</Table.Cell>
                  <Table.Cell textAlign="center">PDF</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Belajar react JS</Table.Cell>
                  <Table.Cell textAlign="center">PDF</Table.Cell>
                </Table.Row>
              </Table.Body>

              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan='3'>
                    <Menu floated='right' pagination>
                      <Menu.Item as='a' icon>
                        <Icon name='chevron left' />
                      </Menu.Item>
                      <Menu.Item as='a'>1</Menu.Item>
                      <Menu.Item as='a'>2</Menu.Item>
                      <Menu.Item as='a'>3</Menu.Item>
                      <Menu.Item as='a'>4</Menu.Item>
                      <Menu.Item as='a' icon>
                        <Icon name='chevron right' />
                      </Menu.Item>
                    </Menu>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Segment>
        </Segment.Group>
      </Container>
      <Divider horizontal>Tugas 14</Divider>
      <Grid container columns={2} stackable>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign="right">
            <Feed>
              <Feed.Event>
                <Feed.Label image = " https://react.semantic-ui.com/images/avatar/small/elliot.jpg">
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    <Feed.User>Elliot Fu</Feed.User> added you as a friend
                    <Feed.Date>1 Hour Ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name='like' />
                      4 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon name='pencil' />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    You posted on your friend Stevie Feliciano's wall.
                  </Feed.Summary>
                  <Feed.Date>3 days ago</Feed.Date>
                  <br/>
                  <Feed.Summary>
                    You posted on your friend Stevie Feliciano's wall.
                  </Feed.Summary>
                  <Feed.Meta>
                    <Feed.Like>
                      4 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
            </Feed>

          </Segment>
        </Grid.Column>
      </Grid>
    </div>
    );
  }
}

export default App;
