/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Modal,
  TextInput,
} from 'react-native';

interface UserData {
  id: number;
  name: string;
  email: string;
  age: number;
}

const App = () => {
  const [data, setData] = useState<UserData[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [showUnfetchButton, setShowUnfetchButton] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState<UserData | null>(null);
  const [editedName, setEditedName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedAge, setEditedAge] = useState(0);

  const validateEmail = (inputText) => {
    const emailRegex =
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}(\.[a-zA-Z]{2,4})?$/;
    return emailRegex.test(inputText);
  };

  const fetchUserData = async () => {
    try {
      setIsFetching(true);
      setShowUnfetchButton(false);

      const url = 'http://127.0.0.1:3000/users';
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result: UserData[] = await response.json();
      setData(result);
      setShowUnfetchButton(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsFetching(false);
    }
  };

  const fetchUserDataWithDelay = () => {
    if (!isFetching) {
      setIsFetching(true);
      setTimeout(() => {
        fetchUserData();
      }, 2000);
    }
  };

  const unfetchUserData = () => {
    setIsFetching(false);
    setData([]);
    setShowUnfetchButton(false);
  };

  const showEditModal = (user: UserData) => {
    setEditingUser(user);
    setEditedName(user.name);
    setEditedEmail(user.email);
    setEditedAge(user.age);
    setIsModalVisible(true);
  };

  const closeEditModal = () => {
    setIsModalVisible(false);
    setEditingUser(null);
    setEditedName('');
    setEditedEmail('');
    setEditedAge(0);
  };

  const saveEdit = async () => {
    try {
      if (!editingUser) {
        Alert.alert('Validation Error', 'Invalid user data for editing.');
        return;
      }

      if (!editedName.trim()) {
        Alert.alert('Validation Error', 'Please enter your name.');
        return;
      }

      if (!/^[a-zA-Z]+(\s[a-zA-Z]+)*$/.test(editedName)) {
        Alert.alert(
          'Validation Error',
          'Name can only contain alphabets and single spaces between words.'
        );
        return;
      }

      if (!editedAge) {
        Alert.alert('Validation Error', 'Please enter your age.');
        return;
      }

      const ageNumber = parseInt(editedAge, 10);

      if (!/^\d{2}$/.test(editedAge) || ageNumber < 10 || ageNumber > 99) {
        Alert.alert(
          'Validation Error',
          'Age should be a number with two digits between 10 and 99.'
        );
        return;
      }

      if (!editedEmail || !validateEmail(editedEmail)) {
        Alert.alert('Validation Error', 'Please enter a valid email address.');
        return;
      }

      setIsFetching(true);

      const url = `http://127.0.0.1:3000/users/${editingUser.id}`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: editedName,
          email: editedEmail,
          age: editedAge,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const updatedData = data.map((user) =>
        user.id === editingUser.id
          ? { ...user, name: editedName, email: editedEmail, age: editedAge }
          : user
      );
      setData(updatedData);

      closeEditModal();
    } catch (error) {
      console.error('Error updating user data:', error);
    } finally {
      setIsFetching(false);
    }
  };

  const renderUserItem = ({ item }: { item: UserData }) => (
    <View style={styles.userContainer}>
      <View style={styles.userInfoContainer}>
        <Text style={styles.userInfoText}>
          <Text style={styles.boldText}>ID:</Text> {item.id}
        </Text>
        <Text style={styles.userInfoText}>
          <Text style={styles.boldText}>Name:</Text>{' '}
          {item.name || 'Name not available'}
        </Text>
        <Text style={styles.userInfoText}>
          <Text style={styles.boldText}>Age:</Text>{' '}
          {item.age || 'Age not available'}
        </Text>
        <Text style={styles.userInfoText}>
          <Text style={styles.boldText}>Email:</Text>{' '}
          {item.email || 'Email not available'}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => showEditModal(item)}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {data.length > 0 && (
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Users Data List</Text>
        </View>
      )}

      <View style={styles.centeredContainer}>
        {!showUnfetchButton && (
          <TouchableOpacity
            style={styles.fetchButton}
            onPress={() => fetchUserDataWithDelay()}
            disabled={isFetching}
          >
            <Text style={styles.buttonText}>
              {isFetching ? 'Fetching...' : 'Fetch User Data'}
            </Text>
          </TouchableOpacity>
        )}

        {isFetching && <ActivityIndicator size="large" color="#3498db" />}

        {!isFetching && data.length === 0 && (
          <Text style={styles.emptyText}>
            No users found. Please fetch user data again.
          </Text>
        )}
      </View>

      {showUnfetchButton && (
        <TouchableOpacity
          style={styles.unfetchButton}
          onPress={() => unfetchUserData()}
          disabled={!data.length}
        >
          <Text style={styles.buttonText}>Unfetch User Data</Text>
        </TouchableOpacity>
      )}

      {data.length > 0 && (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderUserItem}
          style={styles.flatList}
        />
      )}

      <EditModal
        isVisible={isModalVisible}
        onClose={closeEditModal}
        onSave={saveEdit}
        name={editedName}
        email={editedEmail}
        age={editedAge}
        setName={setEditedName}
        setEmail={setEditedEmail}
        setAge={setEditedAge}
      />
    </View>
  );
};

const EditModal = ({
  isVisible,
  onClose,
  onSave,
  name,
  email,
  age,
  setName,
  setEmail,
  setAge,
}) => (
  <Modal visible={isVisible} animationType="fade" transparent>
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Edit User</Text>

        <View style={styles.inputContainer}>
          <Text style={[styles.label, styles.boldLabel]}>
            Name<Text style={{ color: 'red' }}>*</Text> :
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Name"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={[styles.label, styles.boldLabel]}>
            Age<Text style={{ color: 'red' }}>*</Text> :
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Age"
            value={age.toString()}
            onChangeText={(text) => setAge(parseInt(text, 10) || 0)}
            keyboardType="numeric" // Set keyboardType to 'numeric' for age
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={[styles.label, styles.boldLabel]}>
            Email<Text style={{ color: 'red' }}>*</Text> :
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address" // Set keyboardType to 'email-address' for email
          />
        </View>

        <View style={styles.modalButtons}>
          <TouchableOpacity
            style={[styles.modalButton, styles.cancelButton]}
            onPress={onClose}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.modalButton, styles.saveButton]}
            onPress={onSave}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    marginBottom: 20,
    borderRadius: 8,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  fetchButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  unfetchButton: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
  },
  userInfoContainer: {
    flex: 1,
  },
  userInfoText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  emptyText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  flatList: {
    marginTop: 10,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
    width: '100%',
  },
  editButton: {
    backgroundColor: '#2ecc71',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#3498db',
    elevation: 5,
    width: '80%',
    alignSelf: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '45%',
  },
  cancelButton: {
    backgroundColor: '#e74c3c',
  },
  saveButton: {
    backgroundColor: '#2ecc71',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#3498db',
    borderRadius: 5,
    color: '#333',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boldLabel: {
    fontWeight: 'bold',
  },
});

export default App;
