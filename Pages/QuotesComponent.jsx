import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  useGetRandomQuoteQuery,
  useLazyGetRandomQuoteQuery,
} from "../State/quotes/quotesApiSlice";
useGetRandomQuoteQuery;
const QuoteTypeIcon = ({ type }) => {
  let iconName, iconColor, typeText;

  switch (type) {
    case "happiness":
      iconName = "emoji-emotions";
      iconColor = "#FFD700"; 
      typeText = "Happiness";
      break;
    case "inspirational":
      iconName = "lightbulb";
      iconColor = "#FFA500"; 
      typeText = "Inspirational";
      break;
    case "love":
      iconName = "favorite";
      iconColor = "#FF1493"; 
      typeText = "Love";
      break;
    case "self-confidence":
      iconName = "self-improvement";
      iconColor = "#00BFFF"; 
      typeText = "Self-Confidence";
      break;
    case "success":
      iconName = "star";
      iconColor = "#32CD32"; 
      typeText = "Success";
      break;
    default:
      iconName = "help"; 
      iconColor = "#666"; 
      typeText = "Unknown";
  }

  return (
    <View style={styles.typeContainer}>
      <Icon name={iconName} size={20} color={iconColor} />
      <Text style={[styles.typeText, { color: iconColor }]}>{typeText}</Text>
    </View>
  );
};

const QuotesComponent = () => {
  const [trigger, { data, isFetching, error }] = useLazyGetRandomQuoteQuery();
  const {
    data: initialData,
    isFetching: initialFetching,
    error: initialError,
  } = useGetRandomQuoteQuery();

  const quoteData = data || initialData;
  const fetching = isFetching || initialFetching;
  const quoteError = error || initialError;

  const handleRefetch = () => {
    trigger();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Thought for the Day</Text>
        </View>

        {fetching ? (
          <ActivityIndicator size="large" color="#4CAF50" />
        ) : quoteError ? (
          <Text style={styles.errorText}>Error: {quoteError.message}</Text>
        ) : quoteData ? (
          <View>
            <QuoteTypeIcon type={quoteData.type} />
            <Text style={styles.quoteText}>"{quoteData.quote}"</Text>
            <Text style={styles.authorText}>— {quoteData.author}</Text>
          </View>
        ) : (
          <Text style={styles.noQuoteText}>
            No quote available. Press the button to fetch one!
          </Text>
        )}

        <TouchableOpacity
          style={styles.refetchButton}
          onPress={handleRefetch}
          disabled={isFetching}
        >
          <Icon name="refresh" size={20} color="#FFF" />
          <Text style={styles.buttonText}>
            {isFetching ? "Fetching..." : "Fetch New Quote"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default QuotesComponent;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#F1ECE6",
    paddingVertical: 20,
  },
  container: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  typeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  typeText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  quoteText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
    fontStyle: "italic",
  },
  authorText: {
    fontSize: 16,
    color: "#666",
    textAlign: "right",
    fontStyle: "italic",
  },
  noQuoteText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  errorText: {
    fontSize: 16,
    color: "#FF4444",
    textAlign: "center",
  },
  refetchButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
