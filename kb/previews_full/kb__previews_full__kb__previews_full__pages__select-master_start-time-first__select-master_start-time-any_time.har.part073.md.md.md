### kb/previews_full/kb__previews_full__pages__select-master_start-time-first__select-master_start-time-any_time.har.part073.md.md

```md
### kb/previews_full/pages__select-master_start-time-first__select-master_start-time-any_time.har.part073.md

```md
### pages/select-master_start-time-first/select-master_start-time-any_time.har (part 073)

```har
           },
            {
              "name": "X-App-Validation-Token",
              "value": ""
            },
            {
              "name": "X-altegio-Application-Action",
              "value": ""
            },
            {
              "name": "X-altegio-Application-Name",
              "value": "client.booking"
            },
            {
              "name": "X-altegio-Application-Platform",
              "value": "angular-18.2.13"
            },
            {
              "name": "X-altegio-Application-Version",
              "value": "191110.5e092a20"
            },
            {
              "name": "accept-language",
              "value": "ru-RU"
            },
            {
              "name": "baggage",
              "value": "sentry-environment=live,sentry-release=191110.5e092a20,sentry-public_key=7bcbd183611e0badf786d2fc35dc275d,sentry-trace_id=c409b38070bb45148ab1c5636f955075,sentry-transaction=%2Fcompany%2F%3AcompanyId%2Fpersonal%2Fselect-master%2F,sentry-sampled=false,sentry-sample_rand=0.9387946636301895,sentry-sample_rate=0"
            },
            {
              "name": "sec-ch-ua",
              "value": "\"Chromium\";v=\"140\", \"Not=A?Brand\";v=\"24\", \"Microsoft Edge\";v=\"140\""
            },
            {
              "name": "sec-ch-ua-mobile",
              "value": "?1"
            },
            {
              "name": "sec-ch-ua-platform",
              "value": "\"Android\""
            },
            {
              "name": "sentry-trace",
              "value": "c409b38070bb45148ab1c5636f955075-95fe317c57ff832e-0"
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": 2315,
          "bodySize": 156,
          "postData": {
            "mimeType": "application/json",
            "text": "{\"context\":{\"location_id\":166443},\"filter\":{\"date\":\"2025-10-10\",\"records\":[{\"staff_id\":null,\"attendance_service_items\":[{\"type\":\"service\",\"id\":6217293}]}]}}"
          }
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "CF-RAY",
              "value": "98b3772a38cbbcbd-ALA"
            },
            {
              "name": "Cache-Control",
              "value": "no-store, no-cache, must-revalidate"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "Content-Type",
              "value": "application/json"
            },
            {
              "name": "Date",
              "value": "Wed, 08 Oct 2025 06:08:45 GMT"
            },
            {
              "name": "Server",
              "value": "cloudflare"
            },
            {
              "name": "Transfer-Encoding",
              "value": "chunked"
            },
            {
              "name": "access-control-allow-headers",
              "value": "Authorization, Content-Type, Accept-Language, X-Requested-With, X-ALTEGIO-Application-Name, X-ALTEGIO-Application-Action, X-ALTEGIO-Application-Platform, X-ALTEGIO-Application-Version"
            },
            {
              "name": "access-control-allow-methods",
              "value": "GET, POST, PUT, DELETE, OPTIONS, PATCH"
            },
            {
              "name": "access-control-allow-origin",
              "value": "*"
            },
            {
              "name": "access-control-expose-headers",
              "value": "User_Token, X-User_Token"
            },
            {
              "name": "alt-svc",
              "value": "h3=\":443\"; ma=86400"
            },
            {
              "name": "cf-cache-status",
              "value": "DYNAMIC"
            },
            {
              "name": "p3p",
              "value": "CP=\"ALL ADM DEV PSAi COM OUR OTRo STP IND ONL\""
            },
            {
              "name": "strict-transport-security",
              "value": "max-age=15552000; includeSubDomains; preload"
            },
            {
              "name": "vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "x-bounce-id",
              "value": "blc03-htz"
            },
            {
              "name": "x-content-type-options",
              "value": "nosniff"
            },
            {
              "name": "x-csp-token",
              "value": "bacfc19b-17b7-4825-bda1-bd2fa251917b"
            },
            {
              "name": "x-dns-prefetch-control",
              "value": "on"
            },
            {
              "name": "x-feature-notification-next",
              "value": "1"
            },
            {
              "name": "x-feature-waiting-room-api",
              "value": "0"
            },
            {
              "name": "x-feature-waiting-room-web",
              "value": "0"
            },
            {
              "name": "x-node-id",
              "value": "api13-htz.altegio.cloud"
            },
            {
              "name": "x-request-id",
              "value": "ff3e8b3e9317ae10ff0fad0c94904ce6"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 4114,
            "mimeType": "application/json",
            "compression": 3273,
            "text": "{\"data\":[{\"type\":\"booking_search_result_timeslots\",\"id\":\"484a414655f7d6a23966f546715bfb94\",\"attributes\":{\"datetime\":\"2025-10-10T10:00:00+05:00\",\"time\":\"10:00\",\"is_bookable\":true}},{\"type\":\"booking_search_result_timeslots\",\"id\":\"ad22e843a78ada903cd7cfcacdf88dd9\",\"attributes\":{\"datetime\":\"2025-10-10T10:30:00+05:00\",\"time\":\"10:30\",\"is_bookable\":true}},{\"type\":\"booking_search_result_timeslots\",\"id\":\"64dc452e77bce681218bb907ce376bc5\",\"attributes\":{\"datetime\":\"2025-10-10T11:00:00+05:00\",\"time\":\"11:00\",\"is_bookable\":true}},{\"type\":\"booking_search_result_timeslots\",\"id\":\"52a3c1908053a5be3dd77b4a37056cb9\",\"attributes\":{\"datetime\":\"2025-10-10T11:30:00+05:00\",\"time\":\"11:30\",\"is_bookable\":true}},{\"type\":\"booking_search_result_timeslots\",\"id\":\"bde3f37910142bb1e9e6f4406fca1caa\",\"attributes\":{\"datetime\":\"2025-10-10T12:00:00+05:00\",\"time\":\"12:00\",\"is_bookable\":true}},{\"type\":\"booking_search_result_timeslots\",\"id\":\"27c4c82077ad490b92772f5d80f642ff\",\"attributes\":{\"datetime\":\"2025-10-10T12:30:00+05:00\",\"time\":\"12:30\",\"is_bookable\":true}},{\"type\":\"booking_search_result_timeslots\",\"id\":\"9118a6bfe30d5b5adb9fb09c8cace420\",\"attributes\":{\"datetime\":\"2025-10-10T13:00:00+05:00\",\"time\":\"13:00\",\"is_bookable\":true}},{\"type\":\"booking_search_result_timeslots\",\"id\":\"3e2040a3478910c0a80600e03197fba1\",\"attributes\":{\"datetime\":\"2025-10-10T13:30:00+05:00\",\"time\":\"13:30\",\"is_bookable\":true}},{\"type\":\"booking_search_result_timeslots\",\"id\":\"816ff686f5c2ec477e994b74500e0cbe\",\"attributes\":{\"datetime\":\"2025-10-10T14:00:00+05:00\",\"time\":\"14:00\",\"is_bookable\":true}},{\"type\":\"booking_search_result_timeslots\",\"id\":\"a7185b6338263f55797c72a84be97873\",\"attributes\":{\"datetime\":\"2025-10-10T14:30:00+05:00\",\"time\":\"14:30\",\"is_bookable\":true}},{\"type\":\"booking_search_result_timeslots\",\"id\":\"6e8e7861ca9b0167d4b910495cc1d676\",\"attributes\":{\"datetime\":\"2025-10-10T15:00:00+05:00\",\"time\":\"15:00\",\"is_bookable\":true}},{\"type\":\"booking_search_result_timeslots\",\"id\":\"243778682d85524f2217ce8df8a9825e\",\"attributes\":{\"datetime\":\"2025-10-10T15:30:00+05:00\",\"time\":\"15:30\",\"is_bookable\":true}},{\"type\":\"booking_search_result_timeslots\",\"id\":\"fc86ac8c960dc6e839159ac529da338c\",\"attributes\":{\"datetime\":\"2025-10-10T16:00:00+05:00\",\"time\":\"16:00\",\"is_bookable\":true}},{\"type\":\"booking_search_result_timeslots\",\"id\":\"7963ac2acd7e0cca6084f7eb9f75239a\",\"attributes\":{\"datetime\":\"2025-10-10T16:30:00+05:00\",\"time\":\"16:30\",\"is_bookable\":true}},{\"type\":\"booking_search_result_timeslots\",\"id\":\"e7f5a227d62270586e0a2b0ddccb7ce4\",\"attributes\":{\"datetime\":\"2025-10-10T17:00:00+05:00\",\"time\":\"17:00\",\"is_bookable\":true}},{\"type\":\"booking_search_result_timeslots\",\"id\":\"eabd1bbd8383747b0f1a9aa240aa9d88\",\"attributes\":{\"datetime\":\"2025-10-10T17:30:00+05:00\",\"time\":\"17:30\",\"is_bookable\":true}},{\"type\":\"booking_search_result_timeslots\",\"id\":\"72d6a7754f2bcf56d39dd89891e220ee\",\"attributes\":{\"datetime\":\"2025-10-10T18:00:00+05:00\",\"time\":\"18:00\",\"is_bookable\":true}},{\"type\":\"booking_search_result_timeslots\",\"id\":\"a918c025e534a4ccc5c6c91391cfa69d\",\"attributes\":{\"datetime\":\"2025-10-10T18:30:00+05:00\",\"time\":\"18:30\",\"is_bookable\":true}},{\"type\":\"booking_search_result_timeslots\",\"id\":\"238b72c122a045c7b283377d5eb1fcd6\",\"attributes\":{\"datetime\":\"2025-10-10T19:00:00+05:00\",\"time\":\"19:00\",\"is_bookable\":true}},{\"type\":\"booking_search_result_timeslots\",\"id\":\"0ff92b05c28132eacbcec3e8d276a84b\",\"attributes\":{\"datetime\":\"2025-10-10T19:30:00+05:00\",\"time\":\"19:30\",\"is_bookable\":true}},{\"type\":\"booking_search_result_timeslots\",\"id\":\"7dec7a47989bd46bd29d18727d99ea91\",\"attributes\":{\"datetime\":\"2025-10-10T20:00:00+05:00\",\"time\":\"20:00\",\"is_bookable\":true}},{\"type\":\"booking_search_result_timeslots\",\"id\":\"9813996fc57857f36d18943ad6649bd0\",\"attributes\":{\"datetime\":\"2025-10-10T20:30:00+05:00\",\"time\":\"20:30\",\"is_bookable\":true}},{\"type\":\"booking_search_result_timeslots\",\"id\":\"1f092b9f4ddda454f8cdbf0013fb1ae5\",\"attributes\":{\"datetime\":\"2025-10-10T21:00:00+05:00\",\"time\":\"21:00\",\"is_bookable\":true}},{\"type\":\"booking_search_result_timeslots\",\"id\":\"cc2592b77d504dbd026607039b25a838\",\"attributes\":{\"datetime\":\"2025-10-10T21:30:00+05:00\",\"time\":\"21:30\",\"is_bookable\":true}}]}"
          },
          "redirectURL": "",
          "headersSize": 1327,
          "bodySize": 841,
          "_transferSize": 2168,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T06:08:45.153Z",
        "time": 176.90800002310425,
        "timings": {
          "blocked": 3.163999982111156,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.5840000000000001,
          "wait": 172.23499998250603,
          "receive": 0.9250000584870577,
          "_blocked_queueing": 1.816999982111156,
          "_blocked_proxy": 0.523,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "443857",
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "O",
                "scriptId": "19892",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 26029
              },
              {
                "functionName": "scheduleTask",
                "scriptId": "19892",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 6847
              },
              {
                "functionName": "scheduleTask",
                "scriptId": "19892",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 2958
              },
              {
                "functionName": "scheduleMacroTask",
                "scriptId": "19892",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 3267
              },
              {
                "functionName": "Bt",
                "scriptId": "19892",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 10659
              },
              {
                "functionName": "",
                "scriptId": "19892",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 26439
              },
              {
                "functionName": "n.<computed>",
                "scriptId": "19892",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 13807
              },
              {
                "functionName": "apply",
                "scriptId": "19915",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 360009
              },
              {
                "functionName": "t.sendObjectBeacon",
                "scriptId": "19891",
                "url": "https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015",
                "lineNumber": 0,
                "columnNumber": 9089
              },
              {
                "functionName": "P",
                "scriptId": "19891",
                "url": "https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015",
                "lineNumber": 0,
                "columnNumber": 4134
              },
              {
                "functionName": "",
                "scriptId": "19891",
                "url": "https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015",
                "lineNumber": 0,
                "columnNumber": 2774
              },
              {
                "functionName": "c",
                "scriptId": "19874",
                "url": "https://n958200.alteg.io/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js",
                "lineNumber": 0,
                "columnNumber": 9404
              }
            ]
          }
        },
        "_priority": "High",
        "_resourceType": "xhr",
        "cache": {},
        "connection": "9090",
        "pageref": "page_159",
        "request": {
          "method": "POST",
          "url": "https://n958200.alteg.io/cdn-cgi/rum?",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate, br, zstd"
            },
            {
              "name": "Accept-Language",
              "value": "ru"
            },
            {
              "name": "Cache-Control",
              "value": "no-cache"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Length",
              "value": "528"
            },
            {
              "name": "Host",
              "value": "n958200.alteg.io"
            },
            {
              "name": "Origin",
              "value": "https://n958200.alteg.io"
            },
            {
              "name": "Pragma",
              "value": "no-cache"
            },
            {
              "name": "Referer",
              "value": "https://n958200.alteg.io/company/166443/personal/select-master?orderStatus=successed&o=s6217293"
            },
            {
              "name": "Sec-Fetch-Dest",
              "value": "empty"
            },
            {
              "name": "Sec-Fetch-Mode",
              "value": "cors"
            },
            {
              "name": "Sec-Fetch-Site",
              "value": "same-origin"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0"
            },
            {
              "name": "baggage",
              "value": "sentry-environment=live,sentry-release=191110.5e092a20,sentry-public_key=7bcbd183611e0badf786d2fc35dc275d,sentry-trace_id=c409b38070bb45148ab1c5636f955075,sentry-transaction=%2Fcompany%2F%3AcompanyId%2Fpersonal%2Fselect-master%2F,sentry-sampled=false,sentry-sample_rand=0.9387946636301895,sentry-sample_rate=0"
            },
            {
              "name": "content-type",
              "value": "application/json"
            },
            {
              "name": "sec-ch-ua",
              "value": "\"Chromium\";v=\"140\", \"Not=A?Brand\";v=\"24\", \"Microsoft Edge\";v=\"140\""
            },
            {
              "name": "sec-ch-ua-mobile",
              "value": "?1"
            },
            {
              "name": "sec-ch-ua-platform",
              "value": "\"Android\""
            },
            {
              "name": "sentry-trace",
              "value": "c409b38070bb45148ab1c5636f955075-83878f387fd03e14-0"
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": 2000,
          "bodySize": 528,
          "postData": {
            "mimeType": "application/json",
            "text": "{\"resources\":[],\"referrer\":\"https://n958200.alteg.io/company/166443/personal/select-services\",\"eventType\":1,\"firstPaint\":1408,\"firstContentfulPaint\":1408,\"startTime\":1759903699025,\"versions\":{\"fl\":\"2024.11.0\",\"js\":\"2024.6.1\",\"timings\":1},\"pageloadId\":\"e0c36a41-ee56-4b96-a8c8-6f1a6ce8c5db\",\"location\":\"https://n958200.alteg.io/company/166443/personal/select-master\",\"nt\":\"reload\",\"timingsV2\":{\"nextHopProtocol\":\"http/1.1\",\"transferSize\":2175,\"decodedBodySize\":4926},\"dt\":\"\",\"siteToken\":\"9e7204080df64c77b5f1133712bfb8fc\",\"st\":2}"
          }
        },
        "response": {
          "status": 204,
          "statusText": "No Content",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Access-Control-Allow-Credentials",
              "value": "true"
            },
            {
              "name": "Access-Control-Allow-Methods",
              "value": "POST,OPTIONS"
            },
            {
              "name": "Access-Control-Allow-Origin",
              "value": "https://n958200.alteg.io"
            },
            {
              "name": "Access-Control-Max-Age",
              "value": "86400"
            },
            {
              "name": "CF-RAY",
              "value": "98b3777b5d18bcbd-ALA"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Type",
              "value": "text/plain"
            },
            {
              "name": "Date",
              "value": "Wed, 08 Oct 2025 06:08:58 GMT"
            },
            {
              "name": "Server",
              "value": "cloudflare"
            },
            {
              "name": "Strict-Transport-Security",
              "value": "max-age=15552000; includeSubDomains; preload"
            },
            {
              "name": "Vary",
              "value": "Origin, accept-encoding"
            },
            {
              "name": "alt-svc",
              "value": "h3=\":443\"; ma=86400"
            }
          ],
          "cookies": [],
          "content": {
            "size": 0,
            "mimeType": "text/plain",
            "compression": 0,
            "text": ""
          },
          "redirectURL": "",
          "headersSize": 468,
          "bodySize": 0,
          "_transferSize": 468,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T06:08:58.133Z",
        "time": 11.264999979175627,
        "timings": {
          "blocked": 1.7289999872073532,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.544,
          "wait": 8.173000042125583,
          "receive": 0.8189999498426914,
          "_blocked_queueing": 0.5639999872073531,
          "_blocked_proxy": 0.48500000000000004,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "443857",
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "t.sendObjectBeacon",
                "scriptId": "19891",
                "url": "https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015",
                "lineNumber": 0,
                "columnNumber": 8831
              },
              {
                "functionName": "B",
                "scriptId": "19891",
                "url": "https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015",
                "lineNumber": 0,
                "columnNumber": 4926
              },
              {
                "functionName": "",
                "scriptId": "19891",
                "url": "https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015",
                "lineNumber": 0,
                "columnNumber": 2796
              },
              {
                "functionName": "c",
                "scriptId": "19874",
                "url": "https://n958200.alteg.io/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js",
                "lineNumber": 0,
                "columnNumber": 9404
              }
            ]
          }
        },
        "_priority": "VeryLow",
        "_resourceType": "ping",
        "cache": {},
        "connection": "9090",
        "pageref": "page_159",
        "request": {
          "method": "POST",
          "url": "https://n958200.alteg.io/cdn-cgi/rum?",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate, br, zstd"
            },
            {
              "name": "Accept-Language",
              "value": "ru"
            },
            {
              "name": "Cache-Control",
              "value": "no-cache"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Length",
              "value": "1450"
            },
            {
              "name": "Content-Type",
              "value": "application/json"
            },
            {
              "name": "Host",
              "value": "n958200.alteg.io"
            },
            {
              "name": "Origin",
              "value": "https://n958200.alteg.io"
            },
            {
              "name": "Pragma",
              "value": "no-cache"
            },
            {
              "name": "Referer",
              "value": "https://n958200.alteg.io/company/166443/personal/select-master?orderStatus=successed&o=s6217293"
            },
            {
              "name": "Sec-Fetch-Dest",
              "value": "empty"
            },
            {
              "name": "Sec-Fetch-Mode",
              "value": "cors"
            },
            {
              "name": "Sec-Fetch-Site",
              "value": "same-origin"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0"
            },
            {
              "name": "sec-ch-ua",
              "value": "\"Chromium\";v=\"140\", \"Not=A?Brand\";v=\"24\", \"Microsoft Edge\";v=\"140\""
            },
            {
              "name": "sec-ch-ua-mobile",
              "value": "?1"
            },
            {
              "name": "sec-ch-ua-platform",
              "value": "\"Android\""
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": 1614,
          "bodySize": 1450,
          "postData": {
            "mimeType": "application/json",
            "text": "{\"referrer\":\"\",\"eventType\":3,\"versions\":{\"js\":\"2024.6.1\",\"fl\":\"2024.11.0\"},\"pageloadId\":\"e0c36a41-ee56-4b96-a8c8-6f1a6ce8c5db\",\"location\":\"https://n958200.alteg.io/company/166443/personal/select-master\",\"landingPath\":\"/company/166443/personal/menu\",\"startTime\":1759903699025,\"nt\":\"reload\",\"siteToken\":\"9e7204080df64c77b5f1133712bfb8fc\",\"lcp\":{\"value\":2488,\"path\":\"/company/166443/personal/select-time\",\"element\":\"\",\"size\":72720,\"url\":\"https://assets.alteg.io/booking_form_appearance_header/norm/9/96/963fccde44968a0_20240229222400.png\",\"rld\":2112.4000000953674,\"rlt\":220.69999992847443,\"erd\":51.800000071525574,\"it\":\"img\"},\"fid\":{\"value\":1.5999999046325684,\"path\":\"/company/166443/personal/menu\",\"element\":\"ui-kit-simple-cell.date-time-header>div.center-part>div.date-time-main>div.ng-star-inserted\",\"name\":\"pointerdown\"},\"cls\":{\"value\":0.14695788694099504,\"path\":\"/company/166443/personal/select-master\",\"element\":\"\",\"currentRect\":{\"x\":0,\"y\":718,\"width\":540,\"height\":234,\"top\":718,\"right\":540,\"bottom\":952,\"left\":0},\"previousRect\":{\"x\":0,\"y\":703,\"width\":540,\"height\":176,\"top\":703,\"right\":540,\"bottom\":879,\"left\":0}},\"fcp\":{\"value\":1408,\"path\":\"/company/166443/personal/menu\"},\"ttfb\":{\"value\":103.09999990463257,\"path\":\"/company/166443/personal/menu\"},\"inp\":{\"value\":224,\"path\":\"/company/166443/personal/select-master\",\"element\":\"\",\"name\":\"click\"},\"timingsV2\":{\"nextHopProtocol\":\"http/1.1\",\"transferSize\":2175,\"decodedBodySize\":4926},\"dt\":\"\",\"st\":1}"
          }
        },
        "response": {
          "status": 204,
          "statusText": "No Content",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Access-Control-Allow-Credentials",
              "value": "true"
            },
            {
              "name": "Access-Control-Allow-Methods",
              "value": "POST,OPTIONS"
            },
            {
              "name": "Access-Control-Allow-Origin",
              "value": "https://n958200.alteg.io"
            },
            {
              "name": "Access-Control-Max-Age",
              "value": "86400"
            },
            {
              "name": "CF-RAY",
              "value": "98b3777b7d2fbcbd-ALA"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Type",
              "value": "text/plain"
            },
            {
              "name": "Date",
              "value": "Wed, 08 Oct 2025 06:08:58 GMT"
            },
            {
              "name": "Server",
              "value": "cloudflare"
            },
            {
              "name": "Strict-Transport-Security",
              "value": "max-age=15552000; includeSubDomains; preload"
            },
            {
              "name": "Vary",
              "value": "Origin, accept-encoding"
            },
            {
              "name": "alt-svc",
              "value": "h3=\":443\"; ma=86400"
            }
          ],
          "cookies": [],
          "content": {
            "size": 0,
            "mimeType": "text/plain",
            "compression": 0,
            "text": ""
          },
          "redirectURL": "",
          "headersSize": 468,
          "bodySize": 0,
          "_transferSize": 468,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T06:08:58.134Z",
        "time": 31.24100004788488,
        "timings": {
          "blocked": 20.682000044047832,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.9960000000000004,
          "wait": 8.680000032328069,
          "receive": 0.8829999715089798,
          "_blocked_queueing": 17.496000044047832,
          "_blocked_proxy": 0.9200000000000002,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      },
      {
        "_connectionId": "448844",
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "",
                "scriptId": "19892",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 32633
              },
              {
                "functionName": "n.<computed>",
                "scriptId": "19892",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 13807
              },
              {
                "functionName": "i",
                "scriptId": "19915",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 490796
              },
              {
                "functionName": "f",
                "scriptId": "19915",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 322593
              },
              {
                "functionName": "i",
                "scriptId": "19915",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 321340
              },
              {
                "functionName": "o",
                "scriptId": "19915",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 322887
              },
              {
                "functionName": "sendEnvelope",
                "scriptId": "19915",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 315988
              },
              {
                "functionName": "_flushOutcomes",
                "scriptId": "19915",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 319562
              },
              {
                "functionName": "",
                "scriptId": "19915",
                "url": "https://n958200.alteg.io/chunk-6FGVQ7PR.js",
                "lineNumber": 0,
                "columnNumber": 489732
              },
              {
                "functionName": "invokeTask",
                "scriptId": "19892",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 7089
              },
              {
                "functionName": "runTask",
                "scriptId": "19892",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 2354
              },
              {
                "functionName": "invokeTask",
                "scriptId": "19892",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 8163
              },
              {
                "functionName": "M",
                "scriptId": "19892",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15292
              },
              {
                "functionName": "$",
                "scriptId": "19892",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15686
              },
              {
                "functionName": "X",
                "scriptId": "19892",
                "url": "https://n958200.alteg.io/polyfills-QTIMGMLN.js",
                "lineNumber": 0,
                "columnNumber": 15846
              },
              {
                "functionName": "c",
                "scriptId": "19874",
                "url": "https://n958200.alteg.io/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js",
                "lineNumber": 0,
                "columnNumber": 9404
              }
            ]
          }
        },
        "_priority": "High",
        "_resourceType": "fetch",
        "cache": {},
        "connection": "9090",
        "pageref": "page_159",
        "request": {
          "method": "POST",
          "url": "https://errors.alteg.io/api/38/envelope/?sentry_version=7&sentry_key=7bcbd183611e0badf786d2fc35dc275d&sentry_client=sentry.javascript.angular%2F9.46.0",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate, br, zstd"
            },
            {
              "name": "Accept-Language",
              "value": "ru"
            },
            {
              "name": "Cache-Control",
              "value": "no-cache"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Length",
              "value": "196"
            },
            {
              "name": "Content-Type",
              "value": "text/plain;charset=UTF-8"
            },
            {
              "name": "Host",
              "value": "errors.alteg.io"
            },
            {
              "name": "Origin",
              "value": "https://n958200.alteg.io"
            },
            {
              "name": "Pragma",
              "value": "no-cache"
            },
            {
              "name": "Referer",
              "value": "https://n958200.alteg.io/"
            },
            {
              "name": "Sec-Fetch-Dest",
              "value": "empty"
            },
            {
              "name": "Sec-Fetch-Mode",
              "value": "cors"
            },
            {
              "name": "Sec-Fetch-Site",
              "value": "same-site"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 Edg/140.0.0.0"
            },
            {
              "name": "sec-ch-ua",
              "value": "\"Chromium\";v=\"140\", \"Not=A?Brand\";v=\"24\", \"Microsoft Edge\";v=\"140\""
            },
            {
              "name": "sec-ch-ua-mobile",
              "value": "?1"
            },
            {
              "name": "sec-ch-ua-platform",
              "value": "\"Android\""
            }
          ],
          "queryString": [
            {
              "name": "sentry_version",
              "value": "7"
            },
            {
              "name": "sentry_key",
              "value": "7bcbd183611e0badf786d2fc35dc275d"
            },
            {
              "name": "sentry_client",
              "value": "sentry.javascript.angular%2F9.46.0"
            }
          ],
          "cookies": [],
          "headersSize": 805,
          "bodySize": 196,
          "postData": {
            "mimeType": "text/plain;charset=UTF-8",
            "text": "{}\n{\"type\":\"client_report\"}\n{\"timestamp\":1759903738.135,\"discarded_events\":[{\"reason\":\"sample_rate\",\"category\":\"transaction\",\"quantity\":5},{\"reason\":\"sample_rate\",\"category\":\"span\",\"quantity\":1}]}"
          }
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "CF-RAY",
              "value": "98b3777b7c54bcb7-ALA"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Encoding",
              "value": "br"
            },
            {
              "name": "Content-Type",
              "value": "application/json"
            },
            {
              "name": "Date",
              "value": "Wed, 08 Oct 2025 06:08:58 GMT"
            },
            {
              "name": "Server",
              "value": "cloudflare"
            },
            {
              "name": "Transfer-Encoding",
              "value": "chunked"
            },
            {
              "name": "access-control-allow-headers",
              "value": "authorization, content-type, accept-language, x-requested-with, newrelic, traceparent, tracestate, x-user-permissions-hash, x-company-settings-hash, access-token, debug-jwt, x-altegio-application-name, x-altegio-application-action, x-altegio-application-platform, x-altegio-application-version, x-altegio-application-generation, X-App-Signature, X-App-Client-Context, X-App-Validation-Token, Idempotency-Key, x-feature-notification-next"
            },
            {
              "name": "access-control-allow-methods",
              "value": "GET, POST, PUT, DELETE, OPTIONS, PATCH"
            },
            {
              "name": "access-control-allow-origin",
              "value": "*"
            },
            {
              "name": "access-control-expose-headers",
              "value": "user_token, x-user_token, x-newrelic-app-data, x-user-permissions-hash, x-company-settings-hash, X-Feature-Notification-Next, X-App-Security-Level"
            },
            {
              "name": "alt-svc",
              "value": "h3=\":443\"; ma=86400"
            },
            {
              "name": "cf-cache-status",
              "value": "DYNAMIC"
            },
            {
              "name": "cross-origin-resource-policy",
              "value": "cross-origin"
            },
            {
              "name": "p3p",
              "value": "CP=\"ALL ADM DEV PSAi COM OUR OTRo STP IND ONL\""
            },
            {
              "name": "strict-transport-security",
              "value": "max-age=15552000; includeSubDomains; preload"
            },
            {
              "name": "vary",
              "value": "origin, access-control-request-method, access-control-request-headers"
            },
            {
              "name": "x-bounce-id",
              "value": "blc03-htz"
            },
            {
              "name": "x-content-type-options",
              "value": "nosniff"
            },
            {
              "name": "x-dns-prefetch-control",
              "value": "on"
            },
            {
              "name": "x-request-id",
              "value": "4c9dd40e4a07b6cfc71ccf5a043befc4"
            },
            {
              "name": "x-xss-protection",
              "value": "1; mode=block"
            }
          ],
          "cookies": [],
          "content": {
            "size": 2,
            "mimeType": "application/json",
            "compression": -14,
            "text": "{}"
          },
          "redirectURL": "",
          "headersSize": 1430,
          "bodySize": 16,
          "_transferSize": 1446,
          "_error": null,
          "_fetchedViaServiceWorker": false
        },
        "serverIPAddress": "10.8.54.68",
        "startedDateTime": "2025-10-08T06:08:58.135Z",
        "time": 136.37800002470613,
        "timings": {
          "blocked": 21.403999994680284,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.31700000000000017,
          "wait": 113.83899997138232,
          "receive": 0.8180000586435199,
          "_blocked_queueing": 19.262999994680285,
          "_blocked_proxy": 1.642,
          "_workerStart": -1,
          "_workerReady": -1,
          "_workerFetchStart": -1,
          "_workerRespondWithSettled": -1
        }
      }
    ]
  }
}
```

```

```
