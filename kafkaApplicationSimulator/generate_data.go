package main

import (
	"fmt"
	// "io/ioutil"
	// "github.com/gin-gonic/gin"
	"net/http"
	"encoding/json"
	"bytes"
	"math/rand"
	"strings"
	// "strconv"
	// "math"
)

// type JSONresponse struct {
// 	Testing string `json:"testing"` 
// }

func main() {
	NUM_STRINGS := 100

	// Generate a bunch of strings of random numbers and send them to our Express server
	for i := 0; i < NUM_STRINGS; i++ {
		msg := generateData() // Generate a random string
		
		// Put this string into a map before we send it
		mapData := map[string]string{
			"msg": msg}

		// Make a POST request to our Express server
		saveData(mapData)
	}
}

func generateData() string{
	/*
	This function returns a random string
	*/

	data := make([]string, 0)
	stringSize := rand.Intn(10) + 5 // Make sure the string has at least 5 characters

	for i := 0; i < stringSize; i++ {
		num := rand.Intn(26) + 97 // Get an int representing a character in the range ["a", "z"]
		s := string(num) // Convert this int to a string
		data = append(data, s) // Append the string to data
	}
	return strings.Join(data, "") // Join our string array together
}

// func saveData(c *gin.Context) {
func saveData(data map[string]string) {
	/*
	This function takes a map and sends it as a POST request to our Express server
	*/

	// Convert the map into JSON
	requestBody, err := json.Marshal(data)

	if err != nil {
		fmt.Println(err)
	}

	// Send a POST request to port 4000
	url := "http://localhost:4000/api/send"
	resp, reqError := http.Post(url, "application/json", bytes.NewBuffer(requestBody))

	if reqError != nil {
		fmt.Println(reqError)
	}
	defer resp.Body.Close()
	fmt.Println(resp.StatusCode)
}

// func generateData(c *gin.Context) {
// 	url := "http://localhost:3000/"
// 	resp, err := http.Get(url)
// 	if err != nil {
// 		fmt.Println(err)
// 	}
// 	defer resp.Body.Close()

// 	if resp.StatusCode == http.StatusOK {

// 		bodyBytes, bodyError := ioutil.ReadAll(resp.Body)

// 		if err != nil {
// 			fmt.Println(bodyError)
// 		}

// 		var result JSONresponse
// 		json.Unmarshal(bodyBytes, &result)

// 		c.JSON(200, result)
// 	}
// }
