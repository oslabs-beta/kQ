package main

import (
	"fmt"
	// "io/ioutil"
	// "github.com/gin-gonic/gin"
	"net/http"
	"encoding/json"
	"bytes"
	"math/rand"
	// "math"
)

type JSONresponse struct {
	Testing string `json:"testing"` 
}

func main() {
	// router := gin.Default()
	// router.GET("/", saveData)
	// router.Run(":5000")

	NUM_ARRAYS := 100

	// Generate a bunch of arrays of random numbers and send them to our Express server
	for i := 0; i < NUM_ARRAYS; i++ {
		data := generateData() // Generate an array of 10 random integers
		
		// Put this array into a map before we send it
		mapData := map[string][]int{
			"data": data}

		// Make a POST request to our Express server
		saveData(mapData)
	}
}

func generateData() []int{
	/*
	This function returns an array of 10 integers in the range [0, 99] (note that this is inclusive)
	*/

	data := make([]int, 0)
	for i := 0; i < 10; i++ {
		data = append(data, rand.Intn(100))
	}
	return data
}

// func saveData(c *gin.Context) {
func saveData(data map[string][]int) {
	/*
	This function takes a map and sends it as a POST request to our Express server
	*/

	// Convert the map into JSON
	requestBody, err := json.Marshal(data)

	if err != nil {
		fmt.Println(err)
	}

	// Send a POST request to port 3000
	url := "http://localhost:3000/"
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
