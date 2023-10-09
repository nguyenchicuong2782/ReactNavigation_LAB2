import ContactListItem from "../../../component/ContactListItem";

const Contacts = ({ navigation }) => {
    
    const renderContact = ({ item }) => {
        const { name, avatar, phone } = item;
        return <ContactListItem
            name={name}
            avatar={avatar}
            phone={phone}
            onPress={() => navigation.navigate("Profile", { contact: item })}
        />;
    }
};
