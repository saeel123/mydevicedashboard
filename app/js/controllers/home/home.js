app.controller("homeController", function ($scope, $http) {
    
    var token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI0dm94b2dSR1BFclk1YWhzb1lQSTBHemJBQzd1SHB1bWF6S0pISlFhak13In0.eyJqdGkiOiIwNGJkZmVhMS1kOTg3LTQxNzAtOGZlNi00NDJjZDFhMWY2NWQiLCJleHAiOjE1NDQ2MjgzMDIsIm5iZiI6MCwiaWF0IjoxNTQ0NTQxOTAyLCJpc3MiOiJodHRwczovL2FjY291bnRzLm15ZGV2aWNlcy5jb20vYXV0aC9yZWFsbXMvY2F5ZW5uZSIsImF1ZCI6IjgwMWE0YmU3LTQzMWQtNGFjYy1hZjkzLWRhMmQxN2YyNjQwNSIsInN1YiI6IjgwMWE0YmU3LTQzMWQtNGFjYy1hZjkzLWRhMmQxN2YyNjQwNSIsInR5cCI6IkJlYXJlciIsImF6cCI6IjgwMWE0YmU3LTQzMWQtNGFjYy1hZjkzLWRhMmQxN2YyNjQwNSIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6ImU2YWE2YTk2LTQ2ZjYtNDA2My1iYTZjLWQ0MmNkODdmMTUxMCIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOltdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7InJlYWxtLW1hbmFnZW1lbnQiOnsicm9sZXMiOlsiaW1wZXJzb25hdGlvbiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJ1c2VyX2lkIjoiODAxYTRiZTctNDMxZC00YWNjLWFmOTMtZGEyZDE3ZjI2NDA1IiwibmFtZSI6InN0YXJ0MTIzIDEyMzQ1IiwicHJlZmVycmVkX3VzZXJuYW1lIjoic3RhcnQxMjM0NUB5b3BtYWlsLmNvbSIsImdpdmVuX25hbWUiOiJzdGFydDEyMyIsImZhbWlseV9uYW1lIjoiMTIzNDUiLCJlbWFpbCI6InN0YXJ0MTIzNDVAeW9wbWFpbC5jb20ifQ.c1MgraUdgyuz_Y4rPRGDm1Y0Cs45r1H4HWNqtdM6SAAR7GEIBuushupbQ0WVxqFdgEaACL5egG-H8csZtBv4CRbyYHTPVB-zVt_egbIQ3c80iyVuBVSnLZ1XDbMdrgDA_4fNYeKKCDSGwD5I2f_mIi7Z-Rprh1edhH4rVe9xqdb49oNAnuNZm01NsbDwMzEFHbpwzBdD_ReQeZJfBXa5WXG8KkD9Vj4m6Fvad-1tV9qT_wNlgfLPz-7yKjo_Yh9BHn0jXkgqJnO9OOtO2gi8WlsWs-XbCJ0wHn-_J65F4wprZ2GvIdm1JUSTkt1KH8yEGG7YaCHihKekUmFJKOY3ug";


    $http({
            method: "GET",
            url: 'https://platform.mydevices.com/v1.1/things',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(function (response) {

            console.log(response);
            
        });





});