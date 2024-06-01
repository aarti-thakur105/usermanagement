import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const image1 = require('./assets/images/image1.jpg');
const image2 = require('./assets/images/image4.png');
const image3 = require('./assets/images/image3.jpg');

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const [currentPage, setCurrentPage] = useState(0); // State to track current page

  // Use the locally imported images
  const images = [image1, image2, image3];

 
  const reviews = [
    {
      id: 1,
      avatar: 'https://via.placeholder.com/50',
      username: 'Palavrapppu2456',
      text: 'The virtual darshan was divine. Easy to use, it felt like being there. Loved the live rituals and virtual tours. Enhanced my spiritual connection. Highly recommend for remote worship.',
    },
    {
      id: 2,
      avatar: 'https://via.placeholder.com/50',
      username: 'Devotee123',
      text: 'A truly enlightening experience! The virtual tours made me feel connected despite the distance.',
    },
    {
      id: 3,
      avatar: 'https://via.placeholder.com/50',
      username: 'SpiritualSeeker',
      text: 'Wonderful experience. The virtual darshans are well-organized and give a sense of presence in the sacred places.',
    },
  ];

  const onNextPress = () => {
    if (currentPage < reviews.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onPreviousPress = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };


  const renderCarousel = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {images.map((imageSource, index) => (
          <View key={index} style={styles.cardContainer}>
            <TouchableOpacity
              style={styles.previousNavigation}
              onPress={onPreviousPress}
            >
              {/* <Text>{"<"}</Text> */}
            </TouchableOpacity>
            <Image
              source={imageSource}
              style={styles.headercardImage}
            />
            <TouchableOpacity
              style={styles.nextNavigation}
              onPress={onNextPress}
            >
              {/* <Text>{">"}</Text> */}
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    );
  };
  

  const reviewSection = () => {
    return (
      <View style={styles.reviewSection}>
        <Text style={styles.reviewTitle}>Devotee Reviews</Text>
        <Text style={styles.reviewDescription}>
          Over 100,000 virtual darshans have been attended by more than 50,000
          users worldwide, connecting devotees from every corner of the globe to
          the sacred temples. Join the global community and experience the power
          of virtual worship firsthand.
        </Text>
        <View >
          <TouchableOpacity
            style={styles.previousNavigation}
            onPress={onPreviousPress}
          >
            <Text style={styles.reviewPrevious}>{'<'}</Text>
          </TouchableOpacity>
          <View style={styles.reviewCard}>
            <Image
              source={{ uri: reviews[currentPage].avatar }}
              style={styles.reviewAvatar}
            />
            <View style={styles.reviewContent}>
              <Text style={styles.reviewText}>{reviews[currentPage].username}</Text>
              <Text style={styles.reviewAuthor}>{reviews[currentPage].text}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.nextNavigation}
            onPress={onNextPress}
          >
            <Text style={styles.reviewNext}>{'>'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <ScrollView style={styles.container}>


      {renderCarousel()}

      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search Temples, State, Poojas" />
        <Icon name="search" size={20} color="#000" />
      </View>

      <Section title="Explore Temples" subtitle="Chardhams" temples={[
        { name: 'Badrinath Temple', image: 'https://via.placeholder.com/150' },
        { name: 'Ramanathaswamy Temple', image: 'https://via.placeholder.com/150' },
        { name: 'Badrinath Temple', image: 'https://via.placeholder.com/150' },
        { name: 'Ramanathaswamy Temple', image: 'https://via.placeholder.com/150' }
      ]} />

      <Section title="" subtitle="Jyotirlingas" temples={[
        { name: 'Somnath Temple', image: 'https://via.placeholder.com/150' },
        { name: 'Mahakaleshwar Temple', image: 'https://via.placeholder.com/150' },
        { name: 'Mahakaleshwar Temple', image: 'https://via.placeholder.com/150' },
        { name: 'Mahakaleshwar Temple', image: 'https://via.placeholder.com/150' }
      ]} />

      <Section title="" subtitle="Mahashakti Peethas" temples={[
        { name: 'Kamakhya Temple', image: 'https://via.placeholder.com/150' },
        { name: 'Vishalakshi Temple', image: 'https://via.placeholder.com/150' },
        { name: 'Kamakhya Temple', image: 'https://via.placeholder.com/150' },
        { name: 'Vishalakshi Temple', image: 'https://via.placeholder.com/150' }
      ]} />

      {reviewSection()}
    </ScrollView>
  );
};

const Section = ({ title, subtitle, temples }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionSubtitle}>{subtitle}</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <FlatList
        horizontal
        data={temples}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <TempleCard temple={item} />}
      />
    </View>
  );
};

const TempleCard = ({ temple }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: temple.image }} style={styles.cardImage} />
      {/* <Text style={styles.cardText}>{temple.name}</Text> */}
      <TouchableOpacity onPress={toggleLike} style={styles.likeButton}>
        <Icon name={liked ? 'heart' : 'heart-outline'} size={24} color={liked ? 'red' : 'black'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f8f8',
  },
  carousel: {
    height: width * 0.5,
  },
  carouselImage: {
    width: width,
    height: width * 0.5,
    resizeMode: 'cover',
  },
  imageContainer: {
    position: 'relative',
  },
  cardContainer: {
    // alignItems: 'center',
    width: 310, 
    height: 200, 
    gap: 2,
    left: 10
    // marginHorizontal: 5, 
  },
  headercardImage: {
    width: 300,
    height: 129,
    top: 68,
    gap: 2,
    left:1,
    borderRadius:4
  },
  nextNavigation: {
    right: -25,
    position: 'absolute',
    top: '40%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    zIndex: 1,
  },
  previousNavigation: {
    position: 'absolute',
    top: '40%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    zIndex: 1,
    left: -25,
  },
  reviewNext: {
    fontSize: 24,
    color: 'black',
    // width: 7.8,
    // height:13.5,
    left: 4.2,
    top:0.75,
    fontWeight: 'bold'
  },
  reviewPrevious: {
    fontSize: 24,
    color: 'black',
    // width: 7.8,
    // height:13.5,
    left: 20,
    top:0.75,
    fontWeight: 'bold',
  },
  navigationButton: {
    position: 'absolute',
    top: '50%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    zIndex: 1,
  },
  carouselItem: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  previousButton: {
    left: 0,
  },
  nextButton: {
    right: 0,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    margin: 15,
    borderRadius: 12,
    width: 328,
    height:34,
    left: 5,
  },
  searchInput: {
    flex: 1,
    left: 10,
    fontSize: 16,
  },
  section: {
    marginVertical: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    left: 17,
    width: 165,
    height: 22,
    lineHeight: 21.94
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    left: 17

  },
  sectionSubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 105,
    height: 21,
    lineHeight: 20.8,
    letterSpacing: 0,
  },
  seeAll: {
    fontSize: 14,
    color: '#007BFF',
    width: 54,
    height: 18,
    gap: 8,
    right: 20
  },
  card: {
    width: 161,
    height: 148,
    marginHorizontal: 5,
    left: 14,
    backgroundColor: '#fff',
    borderRadius: 4,
    overflow: 'hidden',
    // elevation: 3,
    position: 'relative',
  },
  cardImage: {
    width: 161,
    height: 148,
    resizeMode: 'cover',
  },

  // cardText: {
  //   // padding: 10,
  //   fontSize: 14,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  likeButton: {
    position: 'absolute',
    top: 6,
    // right: 3,
    left: 131,
    width: 24,
    height: 24,
    opacity: 80
  },
 
  reviewSection: {
    marginTop: 15,
    marginBottom: 20,
    width: 328,
    height: 212.88,
    // left: 16,
    gap: 8,
    paddingHorizontal: 16,
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 1,
    left: 3
  },
  reviewDescription: {
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 13,
    letterSpacing: -0.4,
    marginBottom: 5,
    left: 3,
    width: 330,
    height: 52
  },
  reviewCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 13.5,
    backgroundColor: '#999999',
    borderRadius: 4.5,
    shadowColor: '',
    // shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    left: 56,
    width: 228.4,
    height: 110.88,
    gap: 2,
  },
  reviewAvatar: {
    width: 59.07,
    height: 70.32,
    right: 35,
    borderRadius: 4.5,
    // marginRight: 10,
  },
  reviewContent: {
    flex: 1,
    left: 16,
    width: 328,
    height: 52,
  },
  reviewText: {
    fontSize: 11.25,
    width: 98,
    height: 17,
    fontWeight: 'bold',
    marginBottom: 5,
    right: 20,
    color: '#FFFFFF',
    marginTop: -20
  },
  reviewAuthor: {
    fontSize: 8,
    color: '##0E0E0E',
    width: 150.77,
    height: 50,
    fontWeight: '700',
    lineHeight: 10.13,
    right: 20,
    
  },
  reviewCarousel: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 13.5,
    backgroundColor: '#999999',
    borderRadius: 4.5,
    shadowColor: '',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    left: 56,
    width: 228.4,
    height: 110.88,
    gap: 2,
  },
  spaceAfterReviewCard: {
    height: 20,
  },
});

export default HomeScreen;