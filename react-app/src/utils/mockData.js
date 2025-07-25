export const builderResponse = {
    "results": [
        {
            "createdDate": 1753122211962,
            "id": "7d1dde4bbfca4375b3ae64f9a7eb694f",
            "name": "Home",
            "modelId": "a09aae2553c4421292c00a9d368dbee1",
            "published": "published",
            "meta": {
                "kind": "page",
                "hasLinks": false,
                "lastPreviewUrl": "https://www.builder.my/home?model=page&builder.space=3508adaa54f54186a03449ad4f2e6bb3&builder.user.permissions=read%2Ccreate%2Cpublish%2CeditCode%2CeditDesigns%2Cadmin%2CeditLayouts%2CeditLayers%2CeditContentPriority%2CeditFolders%2CeditProjects%2CmodifyMcpServers%2CmodifyProjectSettings%2CconnectCodeRepository%2CcreateProjects&builder.user.role.name=Admin&builder.user.role.id=admin&builder.cachebust=true&builder.preview=page&builder.noCache=true&builder.allowTextEdit=true&__builder_editing__=true&builder.overrides.page=7d1dde4bbfca4375b3ae64f9a7eb694f&builder.overrides.7d1dde4bbfca4375b3ae64f9a7eb694f=7d1dde4bbfca4375b3ae64f9a7eb694f&builder.overrides.page:/home=7d1dde4bbfca4375b3ae64f9a7eb694f&builder.options.locale=Default"
            },
            "query": [
                {
                    "@type": "@builder.io/core:Query",
                    "property": "urlPath",
                    "operator": "is",
                    "value": "/home"
                }
            ],
            "data": {
                "jsCode": "Object.assign(state, {\n  searchQuery: \"\",\n  activeSection: \"programs\",\n  handleSearch() {\n    if (state.searchQuery.trim()) {\n      console.log(\"Searching for:\", state.searchQuery);\n      // In a real app, this would trigger a search API call\n    }\n  },\n  navigateToSection(section) {\n    state.activeSection = section;\n    console.log(\"Navigating to:\", section);\n    // In a real app, this would handle routing\n  },\n  viewStudies(program) {\n    console.log(\"Viewing studies for:\", program);\n    // In a real app, this would navigate to studies page\n  },\n  visitExternalSite(url) {\n    console.log(\"Visiting external site:\", url);\n    // In a real app, this would open external URL\n  },\n  exploreData() {\n    console.log(\"Exploring research data\");\n    // In a real app, this would navigate to data exploration page\n  },\n  contactHelp() {\n    console.log(\"Contacting help desk\");\n    // In a real app, this would open contact form or email\n  },\n  viewReleaseNotes() {\n    console.log(\"Viewing release notes\");\n    // In a real app, this would show release notes modal or page\n  },\n  viewPolicy(policy) {\n    console.log(\"Viewing policy:\", policy);\n    // In a real app, this would show policy document\n  },\n});\n",
                "cssCode": ".builder-be0fdce5ed9d41d1a35f840aedf08664:focus {\n    outline: none;\n    border-color: rgb(18, 91, 130)\n}\n.builder-c9dfb04976d44a138c1cf3810e85e175:hover {\n    background-color: rgba(255, 255, 255, 0.1)\n}\n.builder-c9dfb04976d44a138c1cf3810e85e175:focus {\n    outline: 2px solid rgb(255, 255, 255);\n    outline-offset: -2px\n}\n.builder-c67690bd9dc548c79fb6bc442f728c00:hover {\n    background-color: rgba(255, 255, 255, 0.1)\n}\n.builder-c67690bd9dc548c79fb6bc442f728c00:focus {\n    outline: 2px solid rgb(255, 255, 255);\n    outline-offset: -2px\n}\n.builder-34cb2b0d8a434b469d20bf8ba8b6d2c2:hover {\n    background-color: rgba(255, 255, 255, 0.2)\n}\n.builder-34cb2b0d8a434b469d20bf8ba8b6d2c2:focus {\n    outline: 2px solid rgb(255, 255, 255);\n    outline-offset: -2px\n}\n.builder-cbc37745b53b4c1fb9170ff78e3233cb:hover {\n    background-color: rgba(255, 255, 255, 0.1)\n}\n.builder-cbc37745b53b4c1fb9170ff78e3233cb:focus {\n    outline: 2px solid rgb(255, 255, 255);\n    outline-offset: -2px\n}\n.builder-03922ae0eebf453a985c8c88eb3813e4:hover {\n    background-color: rgba(255, 255, 255, 0.1)\n}\n.builder-03922ae0eebf453a985c8c88eb3813e4:focus {\n    outline: 2px solid rgb(255, 255, 255);\n    outline-offset: -2px\n}\n.builder-50a25d097a0543d0b3085fc88578368d:hover {\n    background-color: rgba(255, 255, 255, 0.1)\n}\n.builder-50a25d097a0543d0b3085fc88578368d:focus {\n    outline: 2px solid rgb(255, 255, 255);\n    outline-offset: -2px\n}\n.builder-db37b7a7980e48498432fad65ba6aac5:hover {\n    background-color: rgba(255, 255, 255, 0.1)\n}\n.builder-db37b7a7980e48498432fad65ba6aac5:focus {\n    outline: 2px solid rgb(255, 255, 255);\n    outline-offset: -2px\n}\n.builder-b89a189a4e72493a85a788c2dc2accf1:hover {\n    background-color: rgb(37, 85, 126)\n}\n.builder-b89a189a4e72493a85a788c2dc2accf1:focus {\n    outline: 2px solid rgb(74, 142, 203);\n    outline-offset: 2px\n}\n.builder-a6528de54c6f4199974e0aece9fec8b9:hover {\n    background-color: rgb(203, 226, 238)\n}\n.builder-a6528de54c6f4199974e0aece9fec8b9:focus {\n    outline: 2px solid rgb(74, 142, 203);\n    outline-offset: 2px\n}\n.builder-40339fe72df14beabfc880ccd98fdca5:hover {\n    background-color: rgb(37, 85, 126)\n}\n.builder-40339fe72df14beabfc880ccd98fdca5:focus {\n    outline: 2px solid rgb(74, 142, 203);\n    outline-offset: 2px\n}\n.builder-dc6dff67a5b0454da70c9f5c6f05fb36:hover {\n    background-color: rgb(203, 226, 238)\n}\n.builder-dc6dff67a5b0454da70c9f5c6f05fb36:focus {\n    outline: 2px solid rgb(74, 142, 203);\n    outline-offset: 2px\n}\n.builder-4f700ead81df4d67b28c51d999f62d44:hover {\n    background-color: rgb(37, 85, 126)\n}\n.builder-4f700ead81df4d67b28c51d999f62d44:focus {\n    outline: 2px solid rgb(74, 142, 203);\n    outline-offset: 2px\n}\n.builder-053ea96e196d431cb48aa2c1d08f13da:hover {\n    background-color: rgb(37, 85, 126)\n}\n.builder-053ea96e196d431cb48aa2c1d08f13da:focus {\n    outline: 2px solid rgb(74, 142, 203);\n    outline-offset: 2px\n}\n.builder-6899de870c974224a6eecb48ece0af5d:hover {\n    background-color: rgb(203, 226, 238)\n}\n.builder-6899de870c974224a6eecb48ece0af5d:focus {\n    outline: 2px solid rgb(74, 142, 203);\n    outline-offset: 2px\n}\n.builder-607d29ee07c04d04a0d2e3f64db88269:hover {\n    color: rgb(203, 226, 238)\n}\n.builder-607d29ee07c04d04a0d2e3f64db88269:focus {\n    outline: 2px solid rgb(255, 255, 255);\n    outline-offset: 2px\n}\n.builder-e3e874b16d1b43c9b0b03a6edbb89a48:hover {\n    color: rgb(203, 226, 238)\n}\n.builder-e3e874b16d1b43c9b0b03a6edbb89a48:focus {\n    outline: 2px solid rgb(255, 255, 255);\n    outline-offset: 2px\n}\n.builder-d4af9d2f7ad84fe5b80d381306ed4c05:hover {\n    color: rgb(203, 226, 238)\n}\n.builder-d4af9d2f7ad84fe5b80d381306ed4c05:focus {\n    outline: 2px solid rgb(255, 255, 255);\n    outline-offset: 2px\n}\n.builder-cee2a99a46a24ec2bed6213966ba7edd:hover {\n    color: rgb(203, 226, 238)\n}\n.builder-cee2a99a46a24ec2bed6213966ba7edd:focus {\n    outline: 2px solid rgb(255, 255, 255);\n    outline-offset: 2px\n}\n.builder-3414533955f2405591d36d59ffd86245:hover {\n    color: rgb(203, 226, 238)\n}\n.builder-3414533955f2405591d36d59ffd86245:focus {\n    outline: 2px solid rgb(255, 255, 255);\n    outline-offset: 2px\n}\n.builder-8ef2db74c68946be93d6e5374273ac6e:hover {\n    color: rgb(203, 226, 238)\n}\n.builder-8ef2db74c68946be93d6e5374273ac6e:focus {\n    outline: 2px solid rgb(255, 255, 255);\n    outline-offset: 2px\n}\n.builder-1ca8b2d624a24a55a1b3776fcf6b6a23:hover {\n    color: rgb(203, 226, 238)\n}\n.builder-1ca8b2d624a24a55a1b3776fcf6b6a23:focus {\n    outline: 2px solid rgb(255, 255, 255);\n    outline-offset: 2px\n}\n.builder-ea7c437d4290475ead73aa02dc4384f4:hover {\n    color: rgb(203, 226, 238)\n}\n.builder-ea7c437d4290475ead73aa02dc4384f4:focus {\n    outline: 2px solid rgb(255, 255, 255);\n    outline-offset: 2px\n}",
                "state": {
                    "searchQuery": "",
                    "activeSection": "programs",
                    "deviceSize": "large",
                    "location": {
                        "path": "",
                        "query": {}
                    }
                },
                "inputs": [],
                "customFonts": [
                    {
                        "category": "sans-serif",
                        "family": "Open Sans",
                        "files": {
                            "300": "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsiH0C4nY1M2xLER.ttf",
                            "500": "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjr0C4nY1M2xLER.ttf",
                            "600": "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsgH1y4nY1M2xLER.ttf",
                            "700": "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1y4nY1M2xLER.ttf",
                            "800": "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgshZ1y4nY1M2xLER.ttf",
                            "300italic": "https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk5hkaVcUwaERZjA.ttf",
                            "500italic": "https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk_RkaVcUwaERZjA.ttf",
                            "600italic": "https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0RkxhjaVcUwaERZjA.ttf",
                            "700italic": "https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0RkyFjaVcUwaERZjA.ttf",
                            "800italic": "https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk0ZjaVcUwaERZjA.ttf",
                            "italic": "https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk8ZkaVcUwaERZjA.ttf",
                            "regular": "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf"
                        },
                        "kind": "webfonts#webfont",
                        "lastModified": "2023-12-14",
                        "menu": "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4maVc.ttf",
                        "subsets": [
                            "cyrillic",
                            "cyrillic-ext",
                            "greek",
                            "greek-ext",
                            "hebrew",
                            "latin",
                            "latin-ext",
                            "math",
                            "symbols",
                            "vietnamese"
                        ],
                        "variants": [
                            "300",
                            "regular",
                            "500",
                            "600",
                            "700",
                            "800",
                            "300italic",
                            "italic",
                            "500italic",
                            "600italic",
                            "700italic",
                            "800italic"
                        ],
                        "version": "v40"
                    },
                    {
                        "category": "sans-serif",
                        "family": "Inter",
                        "files": {
                            "100": "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyeMZhrib2Bg-4.ttf",
                            "200": "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfMZhrib2Bg-4.ttf",
                            "300": "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfMZhrib2Bg-4.ttf",
                            "500": "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZhrib2Bg-4.ttf",
                            "600": "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf",
                            "700": "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZhrib2Bg-4.ttf",
                            "800": "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYMZhrib2Bg-4.ttf",
                            "900": "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuBWYMZhrib2Bg-4.ttf",
                            "regular": "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf"
                        },
                        "kind": "webfonts#webfont",
                        "lastModified": "2023-09-14",
                        "menu": "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZlhjQ.ttf",
                        "subsets": [
                            "cyrillic",
                            "cyrillic-ext",
                            "greek",
                            "greek-ext",
                            "latin",
                            "latin-ext",
                            "vietnamese"
                        ],
                        "variants": [
                            "100",
                            "200",
                            "300",
                            "regular",
                            "500",
                            "600",
                            "700",
                            "800",
                            "900"
                        ],
                        "version": "v13"
                    },
                    {
                        "category": "sans-serif",
                        "family": "Raleway",
                        "files": {
                            "100": "https://fonts.gstatic.com/s/raleway/v29/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvao4CPNLA3JC9c.ttf",
                            "200": "https://fonts.gstatic.com/s/raleway/v29/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVtaooCPNLA3JC9c.ttf",
                            "300": "https://fonts.gstatic.com/s/raleway/v29/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVuEooCPNLA3JC9c.ttf",
                            "500": "https://fonts.gstatic.com/s/raleway/v29/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvoooCPNLA3JC9c.ttf",
                            "600": "https://fonts.gstatic.com/s/raleway/v29/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVsEpYCPNLA3JC9c.ttf",
                            "700": "https://fonts.gstatic.com/s/raleway/v29/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVs9pYCPNLA3JC9c.ttf",
                            "800": "https://fonts.gstatic.com/s/raleway/v29/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVtapYCPNLA3JC9c.ttf",
                            "900": "https://fonts.gstatic.com/s/raleway/v29/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVtzpYCPNLA3JC9c.ttf",
                            "100italic": "https://fonts.gstatic.com/s/raleway/v29/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4WjNPrQVIT9c2c8.ttf",
                            "200italic": "https://fonts.gstatic.com/s/raleway/v29/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4ejMPrQVIT9c2c8.ttf",
                            "300italic": "https://fonts.gstatic.com/s/raleway/v29/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4TbMPrQVIT9c2c8.ttf",
                            "500italic": "https://fonts.gstatic.com/s/raleway/v29/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4VrMPrQVIT9c2c8.ttf",
                            "600italic": "https://fonts.gstatic.com/s/raleway/v29/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4bbLPrQVIT9c2c8.ttf",
                            "700italic": "https://fonts.gstatic.com/s/raleway/v29/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4Y_LPrQVIT9c2c8.ttf",
                            "800italic": "https://fonts.gstatic.com/s/raleway/v29/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4ejLPrQVIT9c2c8.ttf",
                            "900italic": "https://fonts.gstatic.com/s/raleway/v29/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4cHLPrQVIT9c2c8.ttf",
                            "italic": "https://fonts.gstatic.com/s/raleway/v29/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4WjMPrQVIT9c2c8.ttf",
                            "regular": "https://fonts.gstatic.com/s/raleway/v29/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaooCPNLA3JC9c.ttf"
                        },
                        "kind": "webfonts#webfont",
                        "lastModified": "2023-09-14",
                        "menu": "https://fonts.gstatic.com/s/raleway/v29/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCOPrQ.ttf",
                        "subsets": [
                            "cyrillic",
                            "cyrillic-ext",
                            "latin",
                            "latin-ext",
                            "vietnamese"
                        ],
                        "variants": [
                            "100",
                            "200",
                            "300",
                            "regular",
                            "500",
                            "600",
                            "700",
                            "800",
                            "900",
                            "100italic",
                            "200italic",
                            "300italic",
                            "italic",
                            "500italic",
                            "600italic",
                            "700italic",
                            "800italic",
                            "900italic"
                        ],
                        "version": "v29"
                    },
                    {
                        "category": "sans-serif",
                        "family": "Lato",
                        "files": {
                            "100": "https://fonts.gstatic.com/s/lato/v24/S6u8w4BMUTPHh30wWyWrFCbw7A.ttf",
                            "300": "https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh7USew-FGC_p9dw.ttf",
                            "700": "https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh6UVew-FGC_p9dw.ttf",
                            "900": "https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh50Xew-FGC_p9dw.ttf",
                            "100italic": "https://fonts.gstatic.com/s/lato/v24/S6u-w4BMUTPHjxsIPy-vNiPg7MU0.ttf",
                            "300italic": "https://fonts.gstatic.com/s/lato/v24/S6u_w4BMUTPHjxsI9w2PHA3s5dwt7w.ttf",
                            "700italic": "https://fonts.gstatic.com/s/lato/v24/S6u_w4BMUTPHjxsI5wqPHA3s5dwt7w.ttf",
                            "900italic": "https://fonts.gstatic.com/s/lato/v24/S6u_w4BMUTPHjxsI3wiPHA3s5dwt7w.ttf",
                            "italic": "https://fonts.gstatic.com/s/lato/v24/S6u8w4BMUTPHjxswWyWrFCbw7A.ttf",
                            "regular": "https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHvxk6XweuBCY.ttf"
                        },
                        "kind": "webfonts#webfont",
                        "lastModified": "2023-05-02",
                        "menu": "https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHjxgwWw.ttf",
                        "subsets": [
                            "latin",
                            "latin-ext"
                        ],
                        "variants": [
                            "100",
                            "100italic",
                            "300",
                            "300italic",
                            "regular",
                            "italic",
                            "700",
                            "700italic",
                            "900",
                            "900italic"
                        ],
                        "version": "v24"
                    },
                    {
                        "category": "sans-serif",
                        "family": "Roboto",
                        "files": {
                            "100": "https://fonts.gstatic.com/s/roboto/v30/KFOkCnqEu92Fr1MmgWxPKTM1K9nz.ttf",
                            "300": "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5vAx05IsDqlA.ttf",
                            "500": "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9vAx05IsDqlA.ttf",
                            "700": "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf",
                            "900": "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmYUtvAx05IsDqlA.ttf",
                            "100italic": "https://fonts.gstatic.com/s/roboto/v30/KFOiCnqEu92Fr1Mu51QrIzcXLsnzjYk.ttf",
                            "300italic": "https://fonts.gstatic.com/s/roboto/v30/KFOjCnqEu92Fr1Mu51TjARc9AMX6lJBP.ttf",
                            "500italic": "https://fonts.gstatic.com/s/roboto/v30/KFOjCnqEu92Fr1Mu51S7ABc9AMX6lJBP.ttf",
                            "700italic": "https://fonts.gstatic.com/s/roboto/v30/KFOjCnqEu92Fr1Mu51TzBhc9AMX6lJBP.ttf",
                            "900italic": "https://fonts.gstatic.com/s/roboto/v30/KFOjCnqEu92Fr1Mu51TLBBc9AMX6lJBP.ttf",
                            "italic": "https://fonts.gstatic.com/s/roboto/v30/KFOkCnqEu92Fr1Mu52xPKTM1K9nz.ttf",
                            "regular": "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf"
                        },
                        "kind": "webfonts#webfont",
                        "lastModified": "2022-09-22",
                        "menu": "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu5GxP.ttf",
                        "subsets": [
                            "cyrillic",
                            "cyrillic-ext",
                            "greek",
                            "greek-ext",
                            "latin",
                            "latin-ext",
                            "vietnamese"
                        ],
                        "variants": [
                            "100",
                            "100italic",
                            "300",
                            "300italic",
                            "regular",
                            "italic",
                            "500",
                            "500italic",
                            "700",
                            "700italic",
                            "900",
                            "900italic"
                        ],
                        "version": "v30"
                    }
                ],
                "blocks": [
                    {
                        "@type": "@builder.io/sdk:Element",
                        "@version": 2,
                        "tagName": "div",
                        "id": "builder-96baf9a8192c42a0b3526273ffc7a810",
                        "children": [
                            {
                                "@type": "@builder.io/sdk:Element",
                                "@version": 2,
                                "tagName": "header",
                                "id": "builder-7ee464af2e4044de83d904a0e6df258b",
                                "properties": {
                                    "class": "header-component"
                                },
                                "children": [
                                    {
                                        "@type": "@builder.io/sdk:Element",
                                        "@version": 2,
                                        "tagName": "div",
                                        "id": "builder-970a375c80f24bafbc3abcaf4e8211d8",
                                        "children": [
                                            {
                                                "@type": "@builder.io/sdk:Element",
                                                "@version": 2,
                                                "id": "builder-93d2b2408ddc40d8bcad9a2fea7a93d2",
                                                "component": {
                                                    "name": "Text",
                                                    "options": {
                                                        "text": "NCI Cancer Research Data Commons"
                                                    },
                                                    "isRSC": null
                                                }
                                            }
                                        ],
                                        "responsiveStyles": {
                                            "large": {
                                                "height": "20px",
                                                "backgroundColor": "rgb(241, 241, 241)",
                                                "display": "flex",
                                                "alignItems": "center",
                                                "justifyContent": "center",
                                                "fontSize": "12px",
                                                "fontFamily": "Open Sans, sans-serif",
                                                "color": "rgb(0, 0, 0)"
                                            }
                                        }
                                    },
                                    {
                                        "@type": "@builder.io/sdk:Element",
                                        "@version": 2,
                                        "tagName": "div",
                                        "id": "builder-27e37d45512c4b88b987f763ea7345b4",
                                        "children": [
                                            {
                                                "@type": "@builder.io/sdk:Element",
                                                "@version": 2,
                                                "id": "builder-f430552bb4a94407ba8e8e9f1ab1b5d3",
                                                "tag": "img",
                                                "component": {
                                                    "name": "Image",
                                                    "options": {
                                                        "image": "https://cdn.builder.io/api/v1/image/assets%2F3508adaa54f54186a03449ad4f2e6bb3%2F414d7103ae394b80a646300339f65c85",
                                                        "backgroundSize": "cover",
                                                        "backgroundPosition": "center",
                                                        "lazy": false,
                                                        "fitContent": true,
                                                        "aspectRatio": 0.139,
                                                        "lockAspectRatio": false,
                                                        "height": 126,
                                                        "width": 904
                                                    },
                                                    "isRSC": null
                                                },
                                                "responsiveStyles": {
                                                    "large": {
                                                        "display": "flex",
                                                        "flexDirection": "column",
                                                        "position": "relative",
                                                        "flexShrink": "0",
                                                        "boxSizing": "border-box",
                                                        "width": "300%",
                                                        "minHeight": "20px",
                                                        "minWidth": "20px",
                                                        "overflow": "hidden",
                                                        "maxWidth": "512px",
                                                        "height": "auto",
                                                        "alignSelf": "stretch",
                                                        "marginRight": "auto",
                                                        "marginTop": "auto",
                                                        "marginBottom": "auto"
                                                    }
                                                }
                                            },
                                            {
                                                "@type": "@builder.io/sdk:Element",
                                                "@version": 2,
                                                "tagName": "div",
                                                "id": "builder-4d5aed6de172457088050d9ea203b10d",
                                                "children": [
                                                    {
                                                        "@type": "@builder.io/sdk:Element",
                                                        "@version": 2,
                                                        "id": "builder-20e0afdc805349d58907e93319f56e0a",
                                                        "component": {
                                                            "name": "Image",
                                                            "options": {
                                                                "altText": "National Cancer Institute Logo",
                                                                "aspectRatio": 2.71,
                                                                "height": 38,
                                                                "width": 300,
                                                                "image": "https://raw.githubusercontent.com/CBIIT/datacommons-assets/master/icdc/images/svgs/icdc_nih_logo.svg",
                                                                "noWebp": true
                                                            },
                                                            "isRSC": null
                                                        },
                                                        "responsiveStyles": {
                                                            "large": {
                                                                "height": "60px",
                                                                "width": "auto",
                                                                "objectFit": "contain",
                                                                "position": "relative",
                                                                "overflow": "hidden"
                                                            }
                                                        }
                                                    }
                                                ],
                                                "responsiveStyles": {
                                                    "large": {
                                                        "display": "flex",
                                                        "alignItems": "center"
                                                    }
                                                }
                                            },
                                            {
                                                "@type": "@builder.io/sdk:Element",
                                                "@version": 2,
                                                "tagName": "div",
                                                "id": "builder-28877bd23158404688987632e279d9b6",
                                                "children": [
                                                    {
                                                        "@type": "@builder.io/sdk:Element",
                                                        "@version": 2,
                                                        "tagName": "div",
                                                        "id": "builder-58ad371a3335415d9bc25f75087ba22b",
                                                        "children": [
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "label",
                                                                "id": "builder-9014b929c725477a940c19fd329c7490",
                                                                "properties": {
                                                                    "for": "search-input"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "id": "builder-64d6da07aabb4bf69f369e9a5ab25583",
                                                                        "component": {
                                                                            "name": "Text",
                                                                            "options": {
                                                                                "text": "\n                Search the ICDC\n              "
                                                                            },
                                                                            "isRSC": null
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "position": "absolute",
                                                                        "left": "-9999px",
                                                                        "width": "1px",
                                                                        "height": "1px",
                                                                        "overflow": "hidden"
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "input",
                                                                "id": "builder-be0fdce5ed9d41d1a35f840aedf08664",
                                                                "properties": {
                                                                    "type": "text",
                                                                    "id": "search-input",
                                                                    "placeholder": "SEARCH THE ICDC",
                                                                    "class": "builder-be0fdce5ed9d41d1a35f840aedf08664"
                                                                },
                                                                "class": "builder-be0fdce5ed9d41d1a35f840aedf08664",
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "width": "100%",
                                                                        "padding": "12px 45px 12px 15px",
                                                                        "border": "2px solid rgb(74, 142, 203)",
                                                                        "borderRadius": "8px",
                                                                        "fontSize": "14px",
                                                                        "fontFamily": "Open Sans, sans-serif",
                                                                        "backgroundColor": "rgb(255, 255, 255)"
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "button",
                                                                "id": "builder-d8a41282aad346bd99b7a5dac12a6817",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "id": "builder-3c753d7341824076941a3942c903ec19",
                                                                        "children": [
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "id": "builder-d60a14731c8d49faa65294252b8e80ab",
                                                                                "meta": {
                                                                                    "previousId": "builder-55821fe6d1e2499e9550241d5118ee34"
                                                                                },
                                                                                "component": {
                                                                                    "name": "Custom Code",
                                                                                    "options": {
                                                                                        "code": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\">\n  <circle cx=\"11\" cy=\"11\" r=\"8\" />\n  <line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\" />\n</svg>\n",
                                                                                        "scriptsClientOnly": true
                                                                                    },
                                                                                    "isRSC": null
                                                                                },
                                                                                "responsiveStyles": {
                                                                                    "large": {
                                                                                        "display": "flex",
                                                                                        "flexDirection": "column",
                                                                                        "position": "relative",
                                                                                        "flexShrink": "0",
                                                                                        "boxSizing": "border-box",
                                                                                        "paddingBottom": "20px",
                                                                                        "marginTop": "20px"
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        "responsiveStyles": {
                                                                            "large": {
                                                                                "display": "flex",
                                                                                "flexDirection": "row"
                                                                            }
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "position": "absolute",
                                                                        "right": "8px",
                                                                        "top": "50%",
                                                                        "transform": "translateY(-50%)",
                                                                        "background": "none",
                                                                        "border": "none",
                                                                        "cursor": "pointer",
                                                                        "padding": "8px",
                                                                        "color": "rgb(74, 142, 203)"
                                                                    }
                                                                }
                                                            }
                                                        ],
                                                        "responsiveStyles": {
                                                            "large": {
                                                                "position": "relative",
                                                                "width": "100%",
                                                                "maxWidth": "300px"
                                                            }
                                                        }
                                                    }
                                                ],
                                                "responsiveStyles": {
                                                    "large": {
                                                        "display": "flex",
                                                        "alignItems": "center",
                                                        "flex": "1",
                                                        "justifyContent": "flex-end",
                                                        "maxWidth": "400px"
                                                    }
                                                }
                                            }
                                        ],
                                        "responsiveStyles": {
                                            "large": {
                                                "backgroundColor": "rgb(255, 255, 255)",
                                                "height": "100px",
                                                "display": "flex",
                                                "alignItems": "center",
                                                "justifyContent": "space-between",
                                                "padding": "0 47px",
                                                "maxWidth": "1400px",
                                                "margin": "0 auto",
                                                "width": "100%"
                                            }
                                        }
                                    },
                                    {
                                        "@type": "@builder.io/sdk:Element",
                                        "@version": 2,
                                        "tagName": "nav",
                                        "id": "builder-ae37564f33704936816116f7fcac28db",
                                        "children": [
                                            {
                                                "@type": "@builder.io/sdk:Element",
                                                "@version": 2,
                                                "tagName": "div",
                                                "id": "builder-0f387a24fe1c41949cdc6c7a8a7e97af",
                                                "children": [
                                                    {
                                                        "@type": "@builder.io/sdk:Element",
                                                        "@version": 2,
                                                        "tagName": "ul",
                                                        "id": "builder-4771139226614e1ba4a93945815b2032",
                                                        "children": [
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "li",
                                                                "id": "builder-86a3b4965a9a483d86aa64808f60a71f",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "actions": {
                                                                            "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                        },
                                                                        "code": {
                                                                            "actions": {
                                                                                "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                            }
                                                                        },
                                                                        "tagName": "button",
                                                                        "id": "builder-c9dfb04976d44a138c1cf3810e85e175",
                                                                        "properties": {
                                                                            "class": "builder-c9dfb04976d44a138c1cf3810e85e175"
                                                                        },
                                                                        "class": "builder-c9dfb04976d44a138c1cf3810e85e175",
                                                                        "children": [
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "id": "builder-74b7a053a7ab45e1be90448a488ee8f2",
                                                                                "component": {
                                                                                    "name": "Text",
                                                                                    "options": {
                                                                                        "text": "home"
                                                                                    },
                                                                                    "isRSC": null
                                                                                }
                                                                            }
                                                                        ],
                                                                        "responsiveStyles": {
                                                                            "large": {
                                                                                "background": "none",
                                                                                "border": "none",
                                                                                "color": "rgb(255, 255, 255)",
                                                                                "fontFamily": "Open Sans, sans-serif",
                                                                                "fontSize": "14px",
                                                                                "fontWeight": "600",
                                                                                "padding": "0 20px",
                                                                                "cursor": "pointer",
                                                                                "height": "39px",
                                                                                "textTransform": "lowercase",
                                                                                "transition": "background-color 0.3s ease"
                                                                            }
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "li",
                                                                "id": "builder-455c6feda9a0479998f1e9cf071a9d07",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "actions": {
                                                                            "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                        },
                                                                        "code": {
                                                                            "actions": {
                                                                                "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                            }
                                                                        },
                                                                        "tagName": "button",
                                                                        "id": "builder-c67690bd9dc548c79fb6bc442f728c00",
                                                                        "properties": {
                                                                            "class": "builder-c67690bd9dc548c79fb6bc442f728c00"
                                                                        },
                                                                        "class": "builder-c67690bd9dc548c79fb6bc442f728c00",
                                                                        "children": [
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "id": "builder-e89124b86fdd4c06bf3c5da792fd42c9",
                                                                                "component": {
                                                                                    "name": "Text",
                                                                                    "options": {
                                                                                        "text": "explore"
                                                                                    },
                                                                                    "isRSC": null
                                                                                }
                                                                            }
                                                                        ],
                                                                        "responsiveStyles": {
                                                                            "large": {
                                                                                "background": "none",
                                                                                "border": "none",
                                                                                "color": "rgb(255, 255, 255)",
                                                                                "fontFamily": "Open Sans, sans-serif",
                                                                                "fontSize": "14px",
                                                                                "fontWeight": "600",
                                                                                "padding": "0 20px",
                                                                                "cursor": "pointer",
                                                                                "height": "39px",
                                                                                "textTransform": "lowercase",
                                                                                "transition": "background-color 0.3s ease"
                                                                            }
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "li",
                                                                "id": "builder-b0a0dbb0dde74c4d95dcc086baef5726",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "actions": {
                                                                            "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                        },
                                                                        "code": {
                                                                            "actions": {
                                                                                "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                            }
                                                                        },
                                                                        "tagName": "button",
                                                                        "id": "builder-34cb2b0d8a434b469d20bf8ba8b6d2c2",
                                                                        "properties": {
                                                                            "class": "builder-34cb2b0d8a434b469d20bf8ba8b6d2c2"
                                                                        },
                                                                        "class": "builder-34cb2b0d8a434b469d20bf8ba8b6d2c2",
                                                                        "children": [
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "id": "builder-8676a7fabffd41108c608f53db3b86ca",
                                                                                "component": {
                                                                                    "name": "Text",
                                                                                    "options": {
                                                                                        "text": "programs"
                                                                                    },
                                                                                    "isRSC": null
                                                                                }
                                                                            }
                                                                        ],
                                                                        "responsiveStyles": {
                                                                            "large": {
                                                                                "background": "none",
                                                                                "border": "none",
                                                                                "color": "rgb(255, 255, 255)",
                                                                                "fontFamily": "Open Sans, sans-serif",
                                                                                "fontSize": "14px",
                                                                                "fontWeight": "600",
                                                                                "padding": "0 20px",
                                                                                "cursor": "pointer",
                                                                                "height": "39px",
                                                                                "textTransform": "lowercase",
                                                                                "backgroundColor": "rgba(255, 255, 255, 0.1)",
                                                                                "transition": "background-color 0.3s ease"
                                                                            }
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "li",
                                                                "id": "builder-34353469114741069b4eb855bca64e88",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "actions": {
                                                                            "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                        },
                                                                        "code": {
                                                                            "actions": {
                                                                                "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                            }
                                                                        },
                                                                        "tagName": "button",
                                                                        "id": "builder-cbc37745b53b4c1fb9170ff78e3233cb",
                                                                        "properties": {
                                                                            "class": "builder-cbc37745b53b4c1fb9170ff78e3233cb"
                                                                        },
                                                                        "class": "builder-cbc37745b53b4c1fb9170ff78e3233cb",
                                                                        "children": [
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "id": "builder-e7274c2ff2be49fb90c57bc8a99e1cbb",
                                                                                "component": {
                                                                                    "name": "Text",
                                                                                    "options": {
                                                                                        "text": "studies"
                                                                                    },
                                                                                    "isRSC": null
                                                                                }
                                                                            }
                                                                        ],
                                                                        "responsiveStyles": {
                                                                            "large": {
                                                                                "background": "none",
                                                                                "border": "none",
                                                                                "color": "rgb(255, 255, 255)",
                                                                                "fontFamily": "Open Sans, sans-serif",
                                                                                "fontSize": "14px",
                                                                                "fontWeight": "600",
                                                                                "padding": "0 20px",
                                                                                "cursor": "pointer",
                                                                                "height": "39px",
                                                                                "textTransform": "lowercase",
                                                                                "transition": "background-color 0.3s ease"
                                                                            }
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "li",
                                                                "id": "builder-50da5d8e84354c8aa0e53bb3f3a27231",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "actions": {
                                                                            "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                        },
                                                                        "code": {
                                                                            "actions": {
                                                                                "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                            }
                                                                        },
                                                                        "tagName": "button",
                                                                        "id": "builder-03922ae0eebf453a985c8c88eb3813e4",
                                                                        "properties": {
                                                                            "class": "builder-03922ae0eebf453a985c8c88eb3813e4"
                                                                        },
                                                                        "class": "builder-03922ae0eebf453a985c8c88eb3813e4",
                                                                        "children": [
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "id": "builder-cd1dc16154c24c7e9007df28cb7d4ed7",
                                                                                "component": {
                                                                                    "name": "Text",
                                                                                    "options": {
                                                                                        "text": "data"
                                                                                    },
                                                                                    "isRSC": null
                                                                                }
                                                                            }
                                                                        ],
                                                                        "responsiveStyles": {
                                                                            "large": {
                                                                                "background": "none",
                                                                                "border": "none",
                                                                                "color": "rgb(255, 255, 255)",
                                                                                "fontFamily": "Open Sans, sans-serif",
                                                                                "fontSize": "14px",
                                                                                "fontWeight": "600",
                                                                                "padding": "0 20px",
                                                                                "cursor": "pointer",
                                                                                "height": "39px",
                                                                                "textTransform": "lowercase",
                                                                                "transition": "background-color 0.3s ease"
                                                                            }
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "li",
                                                                "id": "builder-4294a7942ec643d09c22a4c8d6856759",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "actions": {
                                                                            "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                        },
                                                                        "code": {
                                                                            "actions": {
                                                                                "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                            }
                                                                        },
                                                                        "tagName": "button",
                                                                        "id": "builder-50a25d097a0543d0b3085fc88578368d",
                                                                        "properties": {
                                                                            "class": "builder-50a25d097a0543d0b3085fc88578368d"
                                                                        },
                                                                        "class": "builder-50a25d097a0543d0b3085fc88578368d",
                                                                        "children": [
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "actions": {
                                                                                    "choose": "true"
                                                                                },
                                                                                "bindings": {
                                                                                    "component.options.event": " return (event /**\n                  * Global objects available in action handlers:\n                  *\n                  * state - builder state object - learn about state https://www.builder.io/c/docs/data-binding-state-and-actions\n                  * context - builder context object - learn about context https://github.com/BuilderIO/builder/tree/main/packages/react#passing-data-and-functions-down\n                  * event - HTML Event - https://developer.mozilla.org/en-US/docs/Web/API/Event\n                  *\n                  * Learn more: https://www.builder.io/c/docs/custom-code\n                  *\n                  */) => console.log(\"enter\")"
                                                                                },
                                                                                "code": {
                                                                                    "actions": {
                                                                                        "choose": "true"
                                                                                    },
                                                                                    "bindings": {
                                                                                        "component.options.event": "(event /**\n                  * Global objects available in action handlers:\n                  *\n                  * state - builder state object - learn about state https://www.builder.io/c/docs/data-binding-state-and-actions\n                  * context - builder context object - learn about context https://github.com/BuilderIO/builder/tree/main/packages/react#passing-data-and-functions-down\n                  * event - HTML Event - https://developer.mozilla.org/en-US/docs/Web/API/Event\n                  *\n                  * Learn more: https://www.builder.io/c/docs/custom-code\n                  *\n                  */) => console.log(\"enter\")"
                                                                                    }
                                                                                },
                                                                                "id": "builder-11d375c358994f35b90400b1f0c87f20",
                                                                                "component": {
                                                                                    "name": "Text",
                                                                                    "options": {
                                                                                        "text": "resources"
                                                                                    },
                                                                                    "isRSC": null
                                                                                }
                                                                            }
                                                                        ],
                                                                        "responsiveStyles": {
                                                                            "large": {
                                                                                "background": "none",
                                                                                "border": "none",
                                                                                "color": "rgb(255, 255, 255)",
                                                                                "fontFamily": "Open Sans, sans-serif",
                                                                                "fontSize": "14px",
                                                                                "fontWeight": "600",
                                                                                "padding": "0 20px",
                                                                                "cursor": "pointer",
                                                                                "height": "39px",
                                                                                "textTransform": "lowercase",
                                                                                "transition": "background-color 0.3s ease"
                                                                            }
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "li",
                                                                "id": "builder-efa2d63ea035492ba1f52a7886231ed3",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "actions": {
                                                                            "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                        },
                                                                        "code": {
                                                                            "actions": {
                                                                                "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                            }
                                                                        },
                                                                        "tagName": "button",
                                                                        "id": "builder-db37b7a7980e48498432fad65ba6aac5",
                                                                        "properties": {
                                                                            "class": "builder-db37b7a7980e48498432fad65ba6aac5"
                                                                        },
                                                                        "class": "builder-db37b7a7980e48498432fad65ba6aac5",
                                                                        "children": [
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "id": "builder-d3712cfc66fe4c098c09dc674312f8cb",
                                                                                "component": {
                                                                                    "name": "Text",
                                                                                    "options": {
                                                                                        "text": "about"
                                                                                    },
                                                                                    "isRSC": null
                                                                                }
                                                                            }
                                                                        ],
                                                                        "responsiveStyles": {
                                                                            "large": {
                                                                                "background": "none",
                                                                                "border": "none",
                                                                                "color": "rgb(255, 255, 255)",
                                                                                "fontFamily": "Open Sans, sans-serif",
                                                                                "fontSize": "14px",
                                                                                "fontWeight": "600",
                                                                                "padding": "0 20px",
                                                                                "cursor": "pointer",
                                                                                "height": "39px",
                                                                                "textTransform": "lowercase",
                                                                                "transition": "background-color 0.3s ease"
                                                                            }
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ],
                                                        "responsiveStyles": {
                                                            "large": {
                                                                "display": "flex",
                                                                "listStyle": "none",
                                                                "margin": "0",
                                                                "padding": "0",
                                                                "alignItems": "center",
                                                                "height": "39px"
                                                            }
                                                        }
                                                    }
                                                ],
                                                "responsiveStyles": {
                                                    "large": {
                                                        "maxWidth": "1400px",
                                                        "width": "100%",
                                                        "padding": "0 47px"
                                                    }
                                                }
                                            }
                                        ],
                                        "responsiveStyles": {
                                            "large": {
                                                "backgroundColor": "rgb(11, 53, 87)",
                                                "height": "39px",
                                                "display": "flex",
                                                "alignItems": "center",
                                                "justifyContent": "center"
                                            }
                                        }
                                    }
                                ],
                                "responsiveStyles": {
                                    "large": {
                                        "position": "fixed",
                                        "backgroundColor": "rgb(255, 255, 255)",
                                        "top": "0",
                                        "left": "0",
                                        "right": "0",
                                        "zIndex": "9999",
                                        "boxShadow": "0 2px 4px rgba(0, 0, 0, 0.1)"
                                    }
                                }
                            },
                            {
                                "@type": "@builder.io/sdk:Element",
                                "@version": 2,
                                "tagName": "main",
                                "id": "builder-94983d76ec8f4826a43689c9904d7d54",
                                "properties": {
                                    "class": "main-content-component"
                                },
                                "children": [
                                    {
                                        "@type": "@builder.io/sdk:Element",
                                        "@version": 2,
                                        "tagName": "section",
                                        "id": "builder-e94abd4c5afe4c35925754efaaf2832f",
                                        "children": [
                                            {
                                                "@type": "@builder.io/sdk:Element",
                                                "@version": 2,
                                                "tagName": "div",
                                                "id": "builder-201b591ee7c64612b5bd073e163c17e9",
                                                "children": [
                                                    {
                                                        "@type": "@builder.io/sdk:Element",
                                                        "@version": 2,
                                                        "tagName": "div",
                                                        "id": "builder-8d7edb018a15437597c99eb29a8176bc",
                                                        "children": [
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "div",
                                                                "id": "builder-5159c69829104d0e96b080cb6fd37632",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "id": "builder-d67c09c491964d739efb99d04987fd1b",
                                                                        "component": {
                                                                            "name": "Text",
                                                                            "options": {
                                                                                "text": "15.2 TB"
                                                                            },
                                                                            "isRSC": null
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "fontSize": "24px",
                                                                        "fontWeight": "700",
                                                                        "color": "rgb(37, 85, 126)",
                                                                        "fontFamily": "Inter, sans-serif",
                                                                        "marginBottom": "4px"
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "div",
                                                                "id": "builder-c5128bca3fc44173b7341d6762d77902",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "id": "builder-e327e68e848b49a1b0399c72ed89369c",
                                                                        "component": {
                                                                            "name": "Text",
                                                                            "options": {
                                                                                "text": "Data Volume"
                                                                            },
                                                                            "isRSC": null
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "fontSize": "12px",
                                                                        "color": "rgb(0, 0, 0)",
                                                                        "fontFamily": "Open Sans, sans-serif",
                                                                        "fontWeight": "600"
                                                                    }
                                                                }
                                                            }
                                                        ],
                                                        "responsiveStyles": {
                                                            "large": {
                                                                "textAlign": "center",
                                                                "minWidth": "120px"
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "@type": "@builder.io/sdk:Element",
                                                        "@version": 2,
                                                        "tagName": "div",
                                                        "id": "builder-b863d3e3ad1d44bd887319f5ab7c8735",
                                                        "children": [
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "div",
                                                                "id": "builder-1b30df72b38e4323b2dc5d6856e5fa78",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "id": "builder-bfd3a74940d8403aac6a206440a01c75",
                                                                        "component": {
                                                                            "name": "Text",
                                                                            "options": {
                                                                                "text": "5"
                                                                            },
                                                                            "isRSC": null
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "fontSize": "24px",
                                                                        "fontWeight": "700",
                                                                        "color": "rgb(37, 85, 126)",
                                                                        "fontFamily": "Inter, sans-serif",
                                                                        "marginBottom": "4px"
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "div",
                                                                "id": "builder-b569ec7d9d3d48069b1318a72a694eca",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "id": "builder-31eba2de0e4741ea98dcac56af52fe3d",
                                                                        "component": {
                                                                            "name": "Text",
                                                                            "options": {
                                                                                "text": "Programs"
                                                                            },
                                                                            "isRSC": null
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "fontSize": "12px",
                                                                        "color": "rgb(0, 0, 0)",
                                                                        "fontFamily": "Open Sans, sans-serif",
                                                                        "fontWeight": "600"
                                                                    }
                                                                }
                                                            }
                                                        ],
                                                        "responsiveStyles": {
                                                            "large": {
                                                                "textAlign": "center",
                                                                "minWidth": "120px"
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "@type": "@builder.io/sdk:Element",
                                                        "@version": 2,
                                                        "tagName": "div",
                                                        "id": "builder-cebf398fa5534546906d7e8cfb5695ea",
                                                        "children": [
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "div",
                                                                "id": "builder-f2e772c69baf469e8397cf7a18c7bcb1",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "id": "builder-e0bceab9ab64482f955b16a154a455a9",
                                                                        "component": {
                                                                            "name": "Text",
                                                                            "options": {
                                                                                "text": "23"
                                                                            },
                                                                            "isRSC": null
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "fontSize": "24px",
                                                                        "fontWeight": "700",
                                                                        "color": "rgb(37, 85, 126)",
                                                                        "fontFamily": "Inter, sans-serif",
                                                                        "marginBottom": "4px"
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "div",
                                                                "id": "builder-7375d45c25af47aba477650e15ad3c2f",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "id": "builder-aceeb7fa264444e695b5851735dc9414",
                                                                        "component": {
                                                                            "name": "Text",
                                                                            "options": {
                                                                                "text": "Studies"
                                                                            },
                                                                            "isRSC": null
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "fontSize": "12px",
                                                                        "color": "rgb(0, 0, 0)",
                                                                        "fontFamily": "Open Sans, sans-serif",
                                                                        "fontWeight": "600"
                                                                    }
                                                                }
                                                            }
                                                        ],
                                                        "responsiveStyles": {
                                                            "large": {
                                                                "textAlign": "center",
                                                                "minWidth": "120px"
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "@type": "@builder.io/sdk:Element",
                                                        "@version": 2,
                                                        "tagName": "div",
                                                        "id": "builder-7f62045df1c548ca96c6a4a911ec2e3b",
                                                        "children": [
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "div",
                                                                "id": "builder-2254b6f49b664648b94f6516b396ff22",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "id": "builder-18437ec9dedf4b138901b1b7bd3905b2",
                                                                        "component": {
                                                                            "name": "Text",
                                                                            "options": {
                                                                                "text": "1,847"
                                                                            },
                                                                            "isRSC": null
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "fontSize": "24px",
                                                                        "fontWeight": "700",
                                                                        "color": "rgb(37, 85, 126)",
                                                                        "fontFamily": "Inter, sans-serif",
                                                                        "marginBottom": "4px"
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "div",
                                                                "id": "builder-5f8f983348564ec193bd054dce39bbcf",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "id": "builder-34f168f8d04d40e19ae9df9bd3582d7d",
                                                                        "component": {
                                                                            "name": "Text",
                                                                            "options": {
                                                                                "text": "Cases"
                                                                            },
                                                                            "isRSC": null
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "fontSize": "12px",
                                                                        "color": "rgb(0, 0, 0)",
                                                                        "fontFamily": "Open Sans, sans-serif",
                                                                        "fontWeight": "600"
                                                                    }
                                                                }
                                                            }
                                                        ],
                                                        "responsiveStyles": {
                                                            "large": {
                                                                "textAlign": "center",
                                                                "minWidth": "120px"
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "@type": "@builder.io/sdk:Element",
                                                        "@version": 2,
                                                        "tagName": "div",
                                                        "id": "builder-4cebcfeaa05e4914997947d2797c6df4",
                                                        "children": [
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "div",
                                                                "id": "builder-6f5a26c7707f4f3ab56bcf2a2bb55ad8",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "id": "builder-6e6b4567ae0e41e9933e971b63d90b4e",
                                                                        "component": {
                                                                            "name": "Text",
                                                                            "options": {
                                                                                "text": "3,294"
                                                                            },
                                                                            "isRSC": null
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "fontSize": "24px",
                                                                        "fontWeight": "700",
                                                                        "color": "rgb(37, 85, 126)",
                                                                        "fontFamily": "Inter, sans-serif",
                                                                        "marginBottom": "4px"
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "div",
                                                                "id": "builder-3766690fbacc4b09afbb393540e865bc",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "id": "builder-bbdab492da484d9eaebe44289f473427",
                                                                        "component": {
                                                                            "name": "Text",
                                                                            "options": {
                                                                                "text": "Samples"
                                                                            },
                                                                            "isRSC": null
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "fontSize": "12px",
                                                                        "color": "rgb(0, 0, 0)",
                                                                        "fontFamily": "Open Sans, sans-serif",
                                                                        "fontWeight": "600"
                                                                    }
                                                                }
                                                            }
                                                        ],
                                                        "responsiveStyles": {
                                                            "large": {
                                                                "textAlign": "center",
                                                                "minWidth": "120px"
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "@type": "@builder.io/sdk:Element",
                                                        "@version": 2,
                                                        "tagName": "div",
                                                        "id": "builder-214806871e4a42aca320f1fb6f7da80d",
                                                        "children": [
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "div",
                                                                "id": "builder-23eb2cfc26d44f1684ea9812b8526369",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "id": "builder-421feea2619d4c13890c80a7c2096f27",
                                                                        "component": {
                                                                            "name": "Text",
                                                                            "options": {
                                                                                "text": "5,672"
                                                                            },
                                                                            "isRSC": null
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "fontSize": "24px",
                                                                        "fontWeight": "700",
                                                                        "color": "rgb(37, 85, 126)",
                                                                        "fontFamily": "Inter, sans-serif",
                                                                        "marginBottom": "4px"
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "div",
                                                                "id": "builder-d85e087e3fbe44019ab825a49f88c5e4",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "id": "builder-7bca504eb32c41adbae269ffbaea890a",
                                                                        "component": {
                                                                            "name": "Text",
                                                                            "options": {
                                                                                "text": "Case Files"
                                                                            },
                                                                            "isRSC": null
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "fontSize": "12px",
                                                                        "color": "rgb(0, 0, 0)",
                                                                        "fontFamily": "Open Sans, sans-serif",
                                                                        "fontWeight": "600"
                                                                    }
                                                                }
                                                            }
                                                        ],
                                                        "responsiveStyles": {
                                                            "large": {
                                                                "textAlign": "center",
                                                                "minWidth": "120px"
                                                            }
                                                        }
                                                    }
                                                ],
                                                "responsiveStyles": {
                                                    "large": {
                                                        "maxWidth": "1400px",
                                                        "margin": "0 auto",
                                                        "display": "flex",
                                                        "justifyContent": "space-around",
                                                        "alignItems": "center",
                                                        "flexWrap": "wrap",
                                                        "gap": "24px"
                                                    },
                                                    "medium": {
                                                        "flexDirection": "column",
                                                        "gap": "16px"
                                                    }
                                                }
                                            }
                                        ],
                                        "responsiveStyles": {
                                            "large": {
                                                "backgroundColor": "rgb(203, 226, 238)",
                                                "padding": "24px 47px",
                                                "borderBottom": "1px solid rgb(74, 142, 203)"
                                            }
                                        }
                                    },
                                    {
                                        "@type": "@builder.io/sdk:Element",
                                        "@version": 2,
                                        "tagName": "section",
                                        "id": "builder-f636ea04a14643fe87945339ec766b74",
                                        "children": [
                                            {
                                                "@type": "@builder.io/sdk:Element",
                                                "@version": 2,
                                                "tagName": "div",
                                                "id": "builder-ac6eb11c368b44eeb40a2373072dbe8b",
                                                "children": [
                                                    {
                                                        "@type": "@builder.io/sdk:Element",
                                                        "@version": 2,
                                                        "id": "builder-3767e5f6b73147258e3552e874138274",
                                                        "component": {
                                                            "name": "Image",
                                                            "options": {
                                                                "image": "https://images.pexels.com/photos/8160757/pexels-photo-8160757.jpeg",
                                                                "altText": "Healthy golden retriever dogs running together in an open field"
                                                            },
                                                            "isRSC": null
                                                        },
                                                        "responsiveStyles": {
                                                            "large": {
                                                                "width": "100%",
                                                                "maxWidth": "1105px",
                                                                "height": "auto",
                                                                "borderRadius": "8px",
                                                                "marginBottom": "24px",
                                                                "position": "relative",
                                                                "overflow": "hidden"
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "@type": "@builder.io/sdk:Element",
                                                        "@version": 2,
                                                        "tagName": "div",
                                                        "id": "builder-1ebab6c6d6864959bfd1a0da251e2082",
                                                        "children": [
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "id": "builder-dfd23a4fabe8429686a95e5091891b2e",
                                                                "component": {
                                                                    "name": "Text",
                                                                    "options": {
                                                                        "text": "Advancing Canine Cancer Research"
                                                                    },
                                                                    "isRSC": null
                                                                }
                                                            }
                                                        ],
                                                        "responsiveStyles": {
                                                            "large": {
                                                                "color": "rgb(37, 85, 126)",
                                                                "fontFamily": "Raleway, sans-serif",
                                                                "fontSize": "32px",
                                                                "fontWeight": "600",
                                                                "marginBottom": "16px",
                                                                "letterSpacing": "0.5px"
                                                            },
                                                            "small": {
                                                                "fontSize": "24px"
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "@type": "@builder.io/sdk:Element",
                                                        "@version": 2,
                                                        "tagName": "div",
                                                        "id": "builder-add573fb025f4185bb3fa468ff1af3e4",
                                                        "children": [
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "id": "builder-9307f8daa6c742699238e992ba679ef3",
                                                                "component": {
                                                                    "name": "Text",
                                                                    "options": {
                                                                        "text": "Through comparative oncology research, we study naturally occurring cancers in dogs to advance treatments for both canine and human patients. Our research helps improve the quality of life for our beloved companions while contributing to breakthrough cancer therapies."
                                                                    },
                                                                    "isRSC": null
                                                                }
                                                            }
                                                        ],
                                                        "responsiveStyles": {
                                                            "large": {
                                                                "color": "rgb(0, 0, 0)",
                                                                "fontFamily": "Open Sans, sans-serif",
                                                                "fontSize": "18px",
                                                                "lineHeight": "1.6",
                                                                "maxWidth": "600px",
                                                                "margin": "0 auto",
                                                                "marginBottom": "24px"
                                                            },
                                                            "small": {
                                                                "fontSize": "16px"
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "@type": "@builder.io/sdk:Element",
                                                        "@version": 2,
                                                        "tagName": "div",
                                                        "id": "builder-e8549bbb7cbb4be8a160c0865ea879c0",
                                                        "children": [
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "actions": {
                                                                    "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                },
                                                                "code": {
                                                                    "actions": {
                                                                        "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                    }
                                                                },
                                                                "tagName": "button",
                                                                "id": "builder-b89a189a4e72493a85a788c2dc2accf1",
                                                                "properties": {
                                                                    "class": "builder-b89a189a4e72493a85a788c2dc2accf1",
                                                                    "role": "button",
                                                                    "aria-label": "Learn about our canine cancer research studies"
                                                                },
                                                                "class": "builder-b89a189a4e72493a85a788c2dc2accf1",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "id": "builder-a8804025874d43dd815e702be9bb8e48",
                                                                        "component": {
                                                                            "name": "Text",
                                                                            "options": {
                                                                                "text": "Learn About Our Studies"
                                                                            },
                                                                            "isRSC": null
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "backgroundColor": "rgb(18, 91, 130)",
                                                                        "color": "rgb(255, 255, 255)",
                                                                        "fontFamily": "Lato, sans-serif",
                                                                        "fontSize": "16px",
                                                                        "fontWeight": "600",
                                                                        "padding": "15px 30px",
                                                                        "border": "none",
                                                                        "borderRadius": "8px",
                                                                        "cursor": "pointer",
                                                                        "transition": "background-color 0.3s ease"
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "actions": {
                                                                    "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                },
                                                                "code": {
                                                                    "actions": {
                                                                        "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                    }
                                                                },
                                                                "tagName": "button",
                                                                "id": "builder-a6528de54c6f4199974e0aece9fec8b9",
                                                                "properties": {
                                                                    "class": "builder-a6528de54c6f4199974e0aece9fec8b9",
                                                                    "role": "button",
                                                                    "aria-label": "Explore canine cancer research data and findings"
                                                                },
                                                                "class": "builder-a6528de54c6f4199974e0aece9fec8b9",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "id": "builder-d117eac1fb594dedbfdea0cfba6f15c0",
                                                                        "component": {
                                                                            "name": "Text",
                                                                            "options": {
                                                                                "text": "Explore Data"
                                                                            },
                                                                            "isRSC": null
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "backgroundColor": "rgb(245, 245, 245)",
                                                                        "color": "rgb(37, 85, 126)",
                                                                        "fontFamily": "Lato, sans-serif",
                                                                        "fontSize": "16px",
                                                                        "fontWeight": "600",
                                                                        "padding": "15px 30px",
                                                                        "border": "2px solid rgb(74, 142, 203)",
                                                                        "borderRadius": "8px",
                                                                        "cursor": "pointer",
                                                                        "transition": "all 0.3s ease"
                                                                    }
                                                                }
                                                            }
                                                        ],
                                                        "responsiveStyles": {
                                                            "large": {
                                                                "display": "flex",
                                                                "justifyContent": "center",
                                                                "gap": "16px",
                                                                "flexWrap": "wrap",
                                                                "marginTop": "32px"
                                                            }
                                                        }
                                                    }
                                                ],
                                                "responsiveStyles": {
                                                    "large": {
                                                        "maxWidth": "1400px",
                                                        "margin": "0 auto"
                                                    }
                                                }
                                            }
                                        ],
                                        "responsiveStyles": {
                                            "large": {
                                                "backgroundColor": "rgb(255, 255, 255)",
                                                "padding": "60px 47px",
                                                "textAlign": "center",
                                                "borderBottom": "1px solid rgb(203, 226, 238)"
                                            }
                                        }
                                    },
                                    {
                                        "@type": "@builder.io/sdk:Element",
                                        "@version": 2,
                                        "tagName": "section",
                                        "id": "builder-159bd10d0b4848ff91edcd4e8e9bcba7",
                                        "children": [
                                            {
                                                "@type": "@builder.io/sdk:Element",
                                                "@version": 2,
                                                "tagName": "div",
                                                "id": "builder-3375e49619de403689c7b4d83e77f596",
                                                "children": [
                                                    {
                                                        "@type": "@builder.io/sdk:Element",
                                                        "@version": 2,
                                                        "tagName": "div",
                                                        "id": "builder-11c840adc8eb4c8e89280e3886befc71",
                                                        "children": [
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "svg",
                                                                "id": "builder-8202a54ea8f24861ae36e0aaea46cac5",
                                                                "properties": {
                                                                    "width": "40",
                                                                    "height": "40",
                                                                    "viewBox": "0 0 24 24",
                                                                    "fill": "rgb(0, 102, 15)"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "tagName": "path",
                                                                        "id": "builder-bb36342c6c2b4bc6a2fd2be0e98d6b57",
                                                                        "properties": {
                                                                            "d": "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "flexShrink": "0"
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "h2",
                                                                "id": "builder-0db4b006e231493ca5da4a85a1511fb7",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "id": "builder-2e81c41cb2674ba5a7b11522e1bf722b",
                                                                        "component": {
                                                                            "name": "Text",
                                                                            "options": {
                                                                                "text": "Research Programs"
                                                                            },
                                                                            "isRSC": null
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "color": "rgb(0, 102, 15)",
                                                                        "fontFamily": "Raleway, sans-serif",
                                                                        "fontSize": "28px",
                                                                        "fontWeight": "600",
                                                                        "margin": "0"
                                                                    }
                                                                }
                                                            }
                                                        ],
                                                        "responsiveStyles": {
                                                            "large": {
                                                                "display": "flex",
                                                                "alignItems": "center",
                                                                "marginBottom": "40px",
                                                                "gap": "16px"
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "@type": "@builder.io/sdk:Element",
                                                        "@version": 2,
                                                        "tagName": "div",
                                                        "id": "builder-e914973c93494fd397b780b330920620",
                                                        "children": [
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "div",
                                                                "id": "builder-2faaa1616480448e9309225ec7d9d51f",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "tagName": "div",
                                                                        "id": "builder-af1c05a964c24f41a0f1ff2e0e100adf",
                                                                        "children": [
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "tagName": "div",
                                                                                "id": "builder-40c67804fa5e4e2fa05a40ba3702b7c6",
                                                                                "children": [
                                                                                    {
                                                                                        "@type": "@builder.io/sdk:Element",
                                                                                        "@version": 2,
                                                                                        "tagName": "h3",
                                                                                        "id": "builder-1dde5d479c7f48f6b2043067e0045a5a",
                                                                                        "children": [
                                                                                            {
                                                                                                "@type": "@builder.io/sdk:Element",
                                                                                                "@version": 2,
                                                                                                "id": "builder-318ab0cffb0f4a8a8c44d0c8025a35f9",
                                                                                                "component": {
                                                                                                    "name": "Text",
                                                                                                    "options": {
                                                                                                        "text": "Comparative Oncology Program"
                                                                                                    },
                                                                                                    "isRSC": null
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "responsiveStyles": {
                                                                                            "large": {
                                                                                                "fontFamily": "Raleway, sans-serif",
                                                                                                "fontSize": "18px",
                                                                                                "fontWeight": "600",
                                                                                                "margin": "0"
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        "@type": "@builder.io/sdk:Element",
                                                                                        "@version": 2,
                                                                                        "tagName": "span",
                                                                                        "id": "builder-c0c2e9b83f784496a62c37cec16cf175",
                                                                                        "children": [
                                                                                            {
                                                                                                "@type": "@builder.io/sdk:Element",
                                                                                                "@version": 2,
                                                                                                "id": "builder-46a56c136f584394bf5c121ebc1c208d",
                                                                                                "component": {
                                                                                                    "name": "Text",
                                                                                                    "options": {
                                                                                                        "text": "8 Studies"
                                                                                                    },
                                                                                                    "isRSC": null
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "responsiveStyles": {
                                                                                            "large": {
                                                                                                "backgroundColor": "rgba(255, 255, 255, 0.2)",
                                                                                                "padding": "4px 12px",
                                                                                                "borderRadius": "16px",
                                                                                                "fontSize": "14px",
                                                                                                "fontWeight": "600"
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                "responsiveStyles": {
                                                                                    "large": {
                                                                                        "backgroundColor": "rgb(0, 102, 15)",
                                                                                        "color": "rgb(255, 255, 255)",
                                                                                        "padding": "16px 24px",
                                                                                        "display": "flex",
                                                                                        "justifyContent": "space-between",
                                                                                        "alignItems": "center"
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "tagName": "div",
                                                                                "id": "builder-f7faaa9a5316499aa2507d95ddb7cc9c",
                                                                                "children": [
                                                                                    {
                                                                                        "@type": "@builder.io/sdk:Element",
                                                                                        "@version": 2,
                                                                                        "tagName": "p",
                                                                                        "id": "builder-8012db84c2f448cc8c05ed8f883554d9",
                                                                                        "children": [
                                                                                            {
                                                                                                "@type": "@builder.io/sdk:Element",
                                                                                                "@version": 2,
                                                                                                "id": "builder-31d82b7284ba47f28c4abb51b12f8f5f",
                                                                                                "component": {
                                                                                                    "name": "Text",
                                                                                                    "options": {
                                                                                                        "text": "The Comparative Oncology Program advances cancer research by studying naturally occurring cancers in companion animals. This approach provides valuable insights into cancer biology and treatment development that benefit both veterinary and human medicine."
                                                                                                    },
                                                                                                    "isRSC": null
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "responsiveStyles": {
                                                                                            "large": {
                                                                                                "fontFamily": "Open Sans, sans-serif",
                                                                                                "fontSize": "14px",
                                                                                                "lineHeight": "1.6",
                                                                                                "color": "rgb(0, 0, 0)",
                                                                                                "margin": "0 0 24px 0"
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        "@type": "@builder.io/sdk:Element",
                                                                                        "@version": 2,
                                                                                        "tagName": "div",
                                                                                        "id": "builder-88c796faade2484694349502c8e368c0",
                                                                                        "children": [
                                                                                            {
                                                                                                "@type": "@builder.io/sdk:Element",
                                                                                                "@version": 2,
                                                                                                "actions": {
                                                                                                    "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                                },
                                                                                                "code": {
                                                                                                    "actions": {
                                                                                                        "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                                    }
                                                                                                },
                                                                                                "tagName": "button",
                                                                                                "id": "builder-40339fe72df14beabfc880ccd98fdca5",
                                                                                                "properties": {
                                                                                                    "role": "button",
                                                                                                    "aria-label": "View associated studies for Comparative Oncology Program",
                                                                                                    "class": "builder-40339fe72df14beabfc880ccd98fdca5"
                                                                                                },
                                                                                                "class": "builder-40339fe72df14beabfc880ccd98fdca5",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "@type": "@builder.io/sdk:Element",
                                                                                                        "@version": 2,
                                                                                                        "id": "builder-9d711ef20dcf455997b9ce917e577a0a",
                                                                                                        "component": {
                                                                                                            "name": "Text",
                                                                                                            "options": {
                                                                                                                "text": "Associated Studies"
                                                                                                            },
                                                                                                            "isRSC": null
                                                                                                        }
                                                                                                    }
                                                                                                ],
                                                                                                "responsiveStyles": {
                                                                                                    "large": {
                                                                                                        "backgroundColor": "rgb(18, 91, 130)",
                                                                                                        "color": "rgb(255, 255, 255)",
                                                                                                        "fontFamily": "Lato, sans-serif",
                                                                                                        "fontSize": "14px",
                                                                                                        "fontWeight": "600",
                                                                                                        "padding": "9px 15px",
                                                                                                        "border": "none",
                                                                                                        "borderRadius": "8px",
                                                                                                        "cursor": "pointer",
                                                                                                        "transition": "background-color 0.3s ease"
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            {
                                                                                                "@type": "@builder.io/sdk:Element",
                                                                                                "@version": 2,
                                                                                                "actions": {
                                                                                                    "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                                },
                                                                                                "code": {
                                                                                                    "actions": {
                                                                                                        "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                                    }
                                                                                                },
                                                                                                "tagName": "button",
                                                                                                "id": "builder-dc6dff67a5b0454da70c9f5c6f05fb36",
                                                                                                "properties": {
                                                                                                    "role": "button",
                                                                                                    "aria-label": "Visit Comparative Oncology Program website",
                                                                                                    "class": "builder-dc6dff67a5b0454da70c9f5c6f05fb36"
                                                                                                },
                                                                                                "class": "builder-dc6dff67a5b0454da70c9f5c6f05fb36",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "@type": "@builder.io/sdk:Element",
                                                                                                        "@version": 2,
                                                                                                        "id": "builder-dff113c38b504808bdfbd057dd65d47b",
                                                                                                        "component": {
                                                                                                            "name": "Text",
                                                                                                            "options": {
                                                                                                                "text": "Go to site"
                                                                                                            },
                                                                                                            "isRSC": null
                                                                                                        }
                                                                                                    }
                                                                                                ],
                                                                                                "responsiveStyles": {
                                                                                                    "large": {
                                                                                                        "backgroundColor": "rgb(245, 245, 245)",
                                                                                                        "color": "rgb(37, 85, 126)",
                                                                                                        "fontFamily": "Lato, sans-serif",
                                                                                                        "fontSize": "14px",
                                                                                                        "fontWeight": "600",
                                                                                                        "padding": "9px 15px",
                                                                                                        "border": "2px solid rgb(74, 142, 203)",
                                                                                                        "borderRadius": "8px",
                                                                                                        "cursor": "pointer",
                                                                                                        "transition": "all 0.3s ease"
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "responsiveStyles": {
                                                                                            "large": {
                                                                                                "display": "flex",
                                                                                                "gap": "12px",
                                                                                                "flexWrap": "wrap"
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                "responsiveStyles": {
                                                                                    "large": {
                                                                                        "padding": "24px"
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        "responsiveStyles": {
                                                                            "large": {
                                                                                "flex": "1",
                                                                                "padding": "0"
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "tagName": "div",
                                                                        "id": "builder-311abf2055f14e3d9f476000da059481",
                                                                        "children": [
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "id": "builder-5de0da6948964f23bb12b2b6ab4b1044",
                                                                                "component": {
                                                                                    "name": "Image",
                                                                                    "options": {
                                                                                        "image": "https://images.pexels.com/photos/7470631/pexels-photo-7470631.jpeg",
                                                                                        "altText": "Veterinarian examining a dog for cancer research"
                                                                                    },
                                                                                    "isRSC": null
                                                                                },
                                                                                "responsiveStyles": {
                                                                                    "large": {
                                                                                        "width": "100%",
                                                                                        "height": "100%",
                                                                                        "objectFit": "cover",
                                                                                        "position": "relative",
                                                                                        "overflow": "hidden"
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        "responsiveStyles": {
                                                                            "large": {
                                                                                "width": "200px"
                                                                            },
                                                                            "medium": {
                                                                                "width": "100%",
                                                                                "height": "200px"
                                                                            }
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "borderBottom": "1px solid rgb(203, 226, 238)",
                                                                        "display": "flex"
                                                                    },
                                                                    "medium": {
                                                                        "flexDirection": "column"
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "div",
                                                                "id": "builder-ada60b6b72eb45b6ba2cdd5da0e85ede",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "tagName": "div",
                                                                        "id": "builder-086e33b866c94bee8c2bfe2de6f07441",
                                                                        "children": [
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "tagName": "div",
                                                                                "id": "builder-df10677c7f2f4653bfc5d59a0dce0676",
                                                                                "children": [
                                                                                    {
                                                                                        "@type": "@builder.io/sdk:Element",
                                                                                        "@version": 2,
                                                                                        "tagName": "h3",
                                                                                        "id": "builder-a2a60852f6834c85ae362096407eec5f",
                                                                                        "children": [
                                                                                            {
                                                                                                "@type": "@builder.io/sdk:Element",
                                                                                                "@version": 2,
                                                                                                "id": "builder-429b4ff676314e69a19d1151a9a31215",
                                                                                                "component": {
                                                                                                    "name": "Text",
                                                                                                    "options": {
                                                                                                        "text": "Canine Genomics Program"
                                                                                                    },
                                                                                                    "isRSC": null
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "responsiveStyles": {
                                                                                            "large": {
                                                                                                "fontFamily": "Raleway, sans-serif",
                                                                                                "fontSize": "18px",
                                                                                                "fontWeight": "600",
                                                                                                "margin": "0"
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        "@type": "@builder.io/sdk:Element",
                                                                                        "@version": 2,
                                                                                        "tagName": "span",
                                                                                        "id": "builder-0f25fa1e029e4b23b0fdb2620e655c8b",
                                                                                        "children": [
                                                                                            {
                                                                                                "@type": "@builder.io/sdk:Element",
                                                                                                "@version": 2,
                                                                                                "id": "builder-962c5528183f40e5a1f45f92f706ce80",
                                                                                                "component": {
                                                                                                    "name": "Text",
                                                                                                    "options": {
                                                                                                        "text": "12 Studies"
                                                                                                    },
                                                                                                    "isRSC": null
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "responsiveStyles": {
                                                                                            "large": {
                                                                                                "backgroundColor": "rgba(255, 255, 255, 0.2)",
                                                                                                "padding": "4px 12px",
                                                                                                "borderRadius": "16px",
                                                                                                "fontSize": "14px",
                                                                                                "fontWeight": "600"
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                "responsiveStyles": {
                                                                                    "large": {
                                                                                        "backgroundColor": "rgb(0, 102, 15)",
                                                                                        "color": "rgb(255, 255, 255)",
                                                                                        "padding": "16px 24px",
                                                                                        "display": "flex",
                                                                                        "justifyContent": "space-between",
                                                                                        "alignItems": "center"
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "tagName": "div",
                                                                                "id": "builder-71e08b928cab432e97f1a95325487487",
                                                                                "children": [
                                                                                    {
                                                                                        "@type": "@builder.io/sdk:Element",
                                                                                        "@version": 2,
                                                                                        "tagName": "p",
                                                                                        "id": "builder-f660533e0dfc45ab9a83a22cf7b383fb",
                                                                                        "children": [
                                                                                            {
                                                                                                "@type": "@builder.io/sdk:Element",
                                                                                                "@version": 2,
                                                                                                "id": "builder-b3018bd26ae44e42b1f62720003a5f26",
                                                                                                "component": {
                                                                                                    "name": "Text",
                                                                                                    "options": {
                                                                                                        "text": "The Canine Genomics Program focuses on understanding the genetic basis of cancer in dogs. By analyzing genomic data from canine cancer patients, we identify genetic markers and pathways that contribute to cancer development and progression."
                                                                                                    },
                                                                                                    "isRSC": null
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "responsiveStyles": {
                                                                                            "large": {
                                                                                                "fontFamily": "Open Sans, sans-serif",
                                                                                                "fontSize": "14px",
                                                                                                "lineHeight": "1.6",
                                                                                                "color": "rgb(0, 0, 0)",
                                                                                                "margin": "0 0 24px 0"
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        "@type": "@builder.io/sdk:Element",
                                                                                        "@version": 2,
                                                                                        "tagName": "div",
                                                                                        "id": "builder-a92fb62e950943cdb8c7bd3831b55be4",
                                                                                        "children": [
                                                                                            {
                                                                                                "@type": "@builder.io/sdk:Element",
                                                                                                "@version": 2,
                                                                                                "actions": {
                                                                                                    "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                                },
                                                                                                "code": {
                                                                                                    "actions": {
                                                                                                        "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                                    }
                                                                                                },
                                                                                                "tagName": "button",
                                                                                                "id": "builder-4f700ead81df4d67b28c51d999f62d44",
                                                                                                "properties": {
                                                                                                    "role": "button",
                                                                                                    "aria-label": "View associated studies for Canine Genomics Program",
                                                                                                    "class": "builder-4f700ead81df4d67b28c51d999f62d44"
                                                                                                },
                                                                                                "class": "builder-4f700ead81df4d67b28c51d999f62d44",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "@type": "@builder.io/sdk:Element",
                                                                                                        "@version": 2,
                                                                                                        "id": "builder-aa095841557042f28c2fe4aeb852e3ef",
                                                                                                        "component": {
                                                                                                            "name": "Text",
                                                                                                            "options": {
                                                                                                                "text": "Associated Studies"
                                                                                                            },
                                                                                                            "isRSC": null
                                                                                                        }
                                                                                                    }
                                                                                                ],
                                                                                                "responsiveStyles": {
                                                                                                    "large": {
                                                                                                        "backgroundColor": "rgb(18, 91, 130)",
                                                                                                        "color": "rgb(255, 255, 255)",
                                                                                                        "fontFamily": "Lato, sans-serif",
                                                                                                        "fontSize": "14px",
                                                                                                        "fontWeight": "600",
                                                                                                        "padding": "9px 15px",
                                                                                                        "border": "none",
                                                                                                        "borderRadius": "8px",
                                                                                                        "cursor": "pointer",
                                                                                                        "transition": "background-color 0.3s ease"
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "responsiveStyles": {
                                                                                            "large": {
                                                                                                "display": "flex",
                                                                                                "gap": "12px",
                                                                                                "flexWrap": "wrap"
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                "responsiveStyles": {
                                                                                    "large": {
                                                                                        "padding": "24px"
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        "responsiveStyles": {
                                                                            "large": {
                                                                                "flex": "1",
                                                                                "padding": "0"
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "tagName": "div",
                                                                        "id": "builder-fe8432c8b86a405898e3a19d6693ba26",
                                                                        "children": [
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "id": "builder-22980923278943eba24e1d945f34f13f",
                                                                                "component": {
                                                                                    "name": "Image",
                                                                                    "options": {
                                                                                        "image": "https://images.pexels.com/photos/25626515/pexels-photo-25626515.jpeg",
                                                                                        "altText": "DNA sequencing and genomic research laboratory"
                                                                                    },
                                                                                    "isRSC": null
                                                                                },
                                                                                "responsiveStyles": {
                                                                                    "large": {
                                                                                        "width": "100%",
                                                                                        "height": "100%",
                                                                                        "objectFit": "cover",
                                                                                        "position": "relative",
                                                                                        "overflow": "hidden"
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        "responsiveStyles": {
                                                                            "large": {
                                                                                "width": "200px"
                                                                            },
                                                                            "medium": {
                                                                                "width": "100%",
                                                                                "height": "200px"
                                                                            }
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "borderBottom": "1px solid rgb(203, 226, 238)",
                                                                        "display": "flex"
                                                                    },
                                                                    "medium": {
                                                                        "flexDirection": "column"
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "div",
                                                                "id": "builder-5e795372726f403babd957ab2f069cad",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "tagName": "div",
                                                                        "id": "builder-89591b8b674043ebb0378d81ac175ccf",
                                                                        "children": [
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "tagName": "div",
                                                                                "id": "builder-5cb3a95b79344065acbfb396f9699651",
                                                                                "children": [
                                                                                    {
                                                                                        "@type": "@builder.io/sdk:Element",
                                                                                        "@version": 2,
                                                                                        "tagName": "h3",
                                                                                        "id": "builder-41a22ac014fe404ca4ec574eb680c9f1",
                                                                                        "children": [
                                                                                            {
                                                                                                "@type": "@builder.io/sdk:Element",
                                                                                                "@version": 2,
                                                                                                "id": "builder-980b9b2226784c75aec9319807898a10",
                                                                                                "component": {
                                                                                                    "name": "Text",
                                                                                                    "options": {
                                                                                                        "text": "Immunotherapy Research Program"
                                                                                                    },
                                                                                                    "isRSC": null
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "responsiveStyles": {
                                                                                            "large": {
                                                                                                "fontFamily": "Raleway, sans-serif",
                                                                                                "fontSize": "18px",
                                                                                                "fontWeight": "600",
                                                                                                "margin": "0"
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        "@type": "@builder.io/sdk:Element",
                                                                                        "@version": 2,
                                                                                        "tagName": "span",
                                                                                        "id": "builder-6f35528546434729aac6bf4e31c392dc",
                                                                                        "children": [
                                                                                            {
                                                                                                "@type": "@builder.io/sdk:Element",
                                                                                                "@version": 2,
                                                                                                "id": "builder-285c05a64bc04bcc92dc4eab187cfebc",
                                                                                                "component": {
                                                                                                    "name": "Text",
                                                                                                    "options": {
                                                                                                        "text": "3 Studies"
                                                                                                    },
                                                                                                    "isRSC": null
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "responsiveStyles": {
                                                                                            "large": {
                                                                                                "backgroundColor": "rgba(255, 255, 255, 0.2)",
                                                                                                "padding": "4px 12px",
                                                                                                "borderRadius": "16px",
                                                                                                "fontSize": "14px",
                                                                                                "fontWeight": "600"
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                "responsiveStyles": {
                                                                                    "large": {
                                                                                        "backgroundColor": "rgb(0, 102, 15)",
                                                                                        "color": "rgb(255, 255, 255)",
                                                                                        "padding": "16px 24px",
                                                                                        "display": "flex",
                                                                                        "justifyContent": "space-between",
                                                                                        "alignItems": "center"
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "tagName": "div",
                                                                                "id": "builder-5e3fee5d4a4149fa85ea11c13b6cf584",
                                                                                "children": [
                                                                                    {
                                                                                        "@type": "@builder.io/sdk:Element",
                                                                                        "@version": 2,
                                                                                        "tagName": "p",
                                                                                        "id": "builder-62f4ff6d551d4f6aaed6afdcc55b67f7",
                                                                                        "children": [
                                                                                            {
                                                                                                "@type": "@builder.io/sdk:Element",
                                                                                                "@version": 2,
                                                                                                "id": "builder-42b2c48125ac494995ff5fb7d056e981",
                                                                                                "component": {
                                                                                                    "name": "Text",
                                                                                                    "options": {
                                                                                                        "text": "The Immunotherapy Research Program develops and tests novel immunotherapeutic approaches for treating canine cancers. Our research explores how to harness the immune system to fight cancer more effectively in both dogs and humans."
                                                                                                    },
                                                                                                    "isRSC": null
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "responsiveStyles": {
                                                                                            "large": {
                                                                                                "fontFamily": "Open Sans, sans-serif",
                                                                                                "fontSize": "14px",
                                                                                                "lineHeight": "1.6",
                                                                                                "color": "rgb(0, 0, 0)",
                                                                                                "margin": "0 0 24px 0"
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        "@type": "@builder.io/sdk:Element",
                                                                                        "@version": 2,
                                                                                        "tagName": "div",
                                                                                        "id": "builder-cdcff557901b4f33a6a54080ec5d8d42",
                                                                                        "children": [
                                                                                            {
                                                                                                "@type": "@builder.io/sdk:Element",
                                                                                                "@version": 2,
                                                                                                "actions": {
                                                                                                    "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                                },
                                                                                                "code": {
                                                                                                    "actions": {
                                                                                                        "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                                    }
                                                                                                },
                                                                                                "tagName": "button",
                                                                                                "id": "builder-053ea96e196d431cb48aa2c1d08f13da",
                                                                                                "properties": {
                                                                                                    "role": "button",
                                                                                                    "aria-label": "View associated studies for Immunotherapy Research Program",
                                                                                                    "class": "builder-053ea96e196d431cb48aa2c1d08f13da"
                                                                                                },
                                                                                                "class": "builder-053ea96e196d431cb48aa2c1d08f13da",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "@type": "@builder.io/sdk:Element",
                                                                                                        "@version": 2,
                                                                                                        "id": "builder-06e706e6aafb43d7a7a1e9363b2fae1b",
                                                                                                        "component": {
                                                                                                            "name": "Text",
                                                                                                            "options": {
                                                                                                                "text": "Associated Studies"
                                                                                                            },
                                                                                                            "isRSC": null
                                                                                                        }
                                                                                                    }
                                                                                                ],
                                                                                                "responsiveStyles": {
                                                                                                    "large": {
                                                                                                        "backgroundColor": "rgb(18, 91, 130)",
                                                                                                        "color": "rgb(255, 255, 255)",
                                                                                                        "fontFamily": "Lato, sans-serif",
                                                                                                        "fontSize": "14px",
                                                                                                        "fontWeight": "600",
                                                                                                        "padding": "9px 15px",
                                                                                                        "border": "none",
                                                                                                        "borderRadius": "8px",
                                                                                                        "cursor": "pointer",
                                                                                                        "transition": "background-color 0.3s ease"
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            {
                                                                                                "@type": "@builder.io/sdk:Element",
                                                                                                "@version": 2,
                                                                                                "actions": {
                                                                                                    "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                                },
                                                                                                "code": {
                                                                                                    "actions": {
                                                                                                        "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                                    }
                                                                                                },
                                                                                                "tagName": "button",
                                                                                                "id": "builder-6899de870c974224a6eecb48ece0af5d",
                                                                                                "properties": {
                                                                                                    "role": "button",
                                                                                                    "aria-label": "Visit Immunotherapy Research Program website",
                                                                                                    "class": "builder-6899de870c974224a6eecb48ece0af5d"
                                                                                                },
                                                                                                "class": "builder-6899de870c974224a6eecb48ece0af5d",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "@type": "@builder.io/sdk:Element",
                                                                                                        "@version": 2,
                                                                                                        "id": "builder-827d38f07fe24b1b8ca9ab56f48d51da",
                                                                                                        "component": {
                                                                                                            "name": "Text",
                                                                                                            "options": {
                                                                                                                "text": "Go to site"
                                                                                                            },
                                                                                                            "isRSC": null
                                                                                                        }
                                                                                                    }
                                                                                                ],
                                                                                                "responsiveStyles": {
                                                                                                    "large": {
                                                                                                        "backgroundColor": "rgb(245, 245, 245)",
                                                                                                        "color": "rgb(37, 85, 126)",
                                                                                                        "fontFamily": "Lato, sans-serif",
                                                                                                        "fontSize": "14px",
                                                                                                        "fontWeight": "600",
                                                                                                        "padding": "9px 15px",
                                                                                                        "border": "2px solid rgb(74, 142, 203)",
                                                                                                        "borderRadius": "8px",
                                                                                                        "cursor": "pointer",
                                                                                                        "transition": "all 0.3s ease"
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "responsiveStyles": {
                                                                                            "large": {
                                                                                                "display": "flex",
                                                                                                "gap": "12px",
                                                                                                "flexWrap": "wrap"
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                "responsiveStyles": {
                                                                                    "large": {
                                                                                        "padding": "24px"
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        "responsiveStyles": {
                                                                            "large": {
                                                                                "flex": "1",
                                                                                "padding": "0"
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "tagName": "div",
                                                                        "id": "builder-8bbf2bb1b96745a3903fa23ef65c83ea",
                                                                        "children": [
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "id": "builder-8c14fca0150c4ec89ae4edcece3715a1",
                                                                                "component": {
                                                                                    "name": "Image",
                                                                                    "options": {
                                                                                        "image": "https://images.pexels.com/photos/6436314/pexels-photo-6436314.jpeg",
                                                                                        "altText": "Immune cells and cancer treatment research"
                                                                                    },
                                                                                    "isRSC": null
                                                                                },
                                                                                "responsiveStyles": {
                                                                                    "large": {
                                                                                        "width": "100%",
                                                                                        "height": "100%",
                                                                                        "objectFit": "cover",
                                                                                        "position": "relative",
                                                                                        "overflow": "hidden"
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        "responsiveStyles": {
                                                                            "large": {
                                                                                "width": "200px"
                                                                            },
                                                                            "medium": {
                                                                                "width": "100%",
                                                                                "height": "200px"
                                                                            }
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "display": "flex"
                                                                    },
                                                                    "medium": {
                                                                        "flexDirection": "column"
                                                                    }
                                                                }
                                                            }
                                                        ],
                                                        "responsiveStyles": {
                                                            "large": {
                                                                "backgroundColor": "rgb(255, 255, 255)",
                                                                "borderRadius": "8px",
                                                                "boxShadow": "rgba(149, 157, 165, 0.2) 0px 8px 24px 0px",
                                                                "overflow": "hidden"
                                                            }
                                                        }
                                                    }
                                                ],
                                                "responsiveStyles": {
                                                    "large": {
                                                        "maxWidth": "1400px",
                                                        "margin": "0 auto"
                                                    }
                                                }
                                            }
                                        ],
                                        "responsiveStyles": {
                                            "large": {
                                                "padding": "60px 47px",
                                                "backgroundColor": "rgb(250, 250, 250)"
                                            }
                                        }
                                    }
                                ],
                                "responsiveStyles": {
                                    "large": {
                                        "backgroundColor": "rgb(250, 250, 250)",
                                        "minHeight": "calc(100vh - 159px)",
                                        "marginTop": "159px"
                                    }
                                }
                            },
                            {
                                "@type": "@builder.io/sdk:Element",
                                "@version": 2,
                                "tagName": "footer",
                                "id": "builder-c895daef8120454cbe7d3f0e9700a1f0",
                                "properties": {
                                    "class": "footer-component"
                                },
                                "children": [
                                    {
                                        "@type": "@builder.io/sdk:Element",
                                        "@version": 2,
                                        "tagName": "div",
                                        "id": "builder-11c34b4aecb74d799385ee3f7c58fd06",
                                        "children": [
                                            {
                                                "@type": "@builder.io/sdk:Element",
                                                "@version": 2,
                                                "tagName": "div",
                                                "id": "builder-400997077ff44dc08ed01fc8aa974760",
                                                "children": [
                                                    {
                                                        "@type": "@builder.io/sdk:Element",
                                                        "@version": 2,
                                                        "tagName": "div",
                                                        "id": "builder-b09c439176d7474ebb597759a3d50a2c",
                                                        "children": [
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "h4",
                                                                "id": "builder-acfac394d61c4ddaaa229e19c9e2a0bc",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "id": "builder-257cae3c5115464888550f2dc031d2d4",
                                                                        "component": {
                                                                            "name": "Text",
                                                                            "options": {
                                                                                "text": "Contact Information"
                                                                            },
                                                                            "isRSC": null
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "fontFamily": "Raleway, sans-serif",
                                                                        "fontSize": "16px",
                                                                        "fontWeight": "600",
                                                                        "marginBottom": "16px",
                                                                        "color": "rgb(255, 255, 255)"
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "ul",
                                                                "id": "builder-4c143c68b597476f8cdf380efafc82bb",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "tagName": "li",
                                                                        "id": "builder-931760b06c064f198312e02bcacc94ed",
                                                                        "children": [
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "actions": {
                                                                                    "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                },
                                                                                "code": {
                                                                                    "actions": {
                                                                                        "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                    }
                                                                                },
                                                                                "tagName": "button",
                                                                                "id": "builder-607d29ee07c04d04a0d2e3f64db88269",
                                                                                "properties": {
                                                                                    "role": "button",
                                                                                    "aria-label": "Contact Canine Cancer Research Help Desk",
                                                                                    "class": "builder-607d29ee07c04d04a0d2e3f64db88269"
                                                                                },
                                                                                "class": "builder-607d29ee07c04d04a0d2e3f64db88269",
                                                                                "children": [
                                                                                    {
                                                                                        "@type": "@builder.io/sdk:Element",
                                                                                        "@version": 2,
                                                                                        "id": "builder-da031cf9704140fd87bfd629fa5b44e1",
                                                                                        "component": {
                                                                                            "name": "Text",
                                                                                            "options": {
                                                                                                "text": "CCRC Help Desk"
                                                                                            },
                                                                                            "isRSC": null
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                "responsiveStyles": {
                                                                                    "large": {
                                                                                        "background": "none",
                                                                                        "border": "none",
                                                                                        "color": "rgb(255, 255, 255)",
                                                                                        "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                                                                                        "fontSize": "14px",
                                                                                        "cursor": "pointer",
                                                                                        "textDecoration": "underline",
                                                                                        "padding": "0"
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        "responsiveStyles": {
                                                                            "large": {
                                                                                "marginBottom": "8px"
                                                                            }
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "listStyle": "none",
                                                                        "padding": "0",
                                                                        "margin": "0"
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "@type": "@builder.io/sdk:Element",
                                                        "@version": 2,
                                                        "tagName": "div",
                                                        "id": "builder-58409b6a64634d2fa870c5d78fe6d92b",
                                                        "children": [
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "h4",
                                                                "id": "builder-8575501f4761426f919db8f81c821a3b",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "id": "builder-bd8a63c3efee47769b398a2dd43caad6",
                                                                        "component": {
                                                                            "name": "Text",
                                                                            "options": {
                                                                                "text": "More Information"
                                                                            },
                                                                            "isRSC": null
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "fontFamily": "Raleway, sans-serif",
                                                                        "fontSize": "16px",
                                                                        "fontWeight": "600",
                                                                        "marginBottom": "16px",
                                                                        "color": "rgb(255, 255, 255)"
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "ul",
                                                                "id": "builder-d683bed45b1e4dfea28eb920fd4f6b38",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "tagName": "li",
                                                                        "id": "builder-91f19367225749979e87a63fffc09271",
                                                                        "children": [
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "actions": {
                                                                                    "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                },
                                                                                "code": {
                                                                                    "actions": {
                                                                                        "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                    }
                                                                                },
                                                                                "tagName": "button",
                                                                                "id": "builder-e3e874b16d1b43c9b0b03a6edbb89a48",
                                                                                "properties": {
                                                                                    "role": "button",
                                                                                    "aria-label": "Go to Canine Cancer Research Center home page",
                                                                                    "class": "builder-e3e874b16d1b43c9b0b03a6edbb89a48"
                                                                                },
                                                                                "class": "builder-e3e874b16d1b43c9b0b03a6edbb89a48",
                                                                                "children": [
                                                                                    {
                                                                                        "@type": "@builder.io/sdk:Element",
                                                                                        "@version": 2,
                                                                                        "id": "builder-591d8326cdcd4610921404217fed1738",
                                                                                        "component": {
                                                                                            "name": "Text",
                                                                                            "options": {
                                                                                                "text": "CCRC Home"
                                                                                            },
                                                                                            "isRSC": null
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                "responsiveStyles": {
                                                                                    "large": {
                                                                                        "background": "none",
                                                                                        "border": "none",
                                                                                        "color": "rgb(255, 255, 255)",
                                                                                        "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                                                                                        "fontSize": "14px",
                                                                                        "cursor": "pointer",
                                                                                        "textDecoration": "underline",
                                                                                        "padding": "0"
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        "responsiveStyles": {
                                                                            "large": {
                                                                                "marginBottom": "8px"
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "tagName": "li",
                                                                        "id": "builder-119d88ef62df47af88e13c8fc6de3215",
                                                                        "children": [
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "actions": {
                                                                                    "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                },
                                                                                "code": {
                                                                                    "actions": {
                                                                                        "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                    }
                                                                                },
                                                                                "tagName": "button",
                                                                                "id": "builder-d4af9d2f7ad84fe5b80d381306ed4c05",
                                                                                "properties": {
                                                                                    "role": "button",
                                                                                    "aria-label": "Learn about our steering committee",
                                                                                    "class": "builder-d4af9d2f7ad84fe5b80d381306ed4c05"
                                                                                },
                                                                                "class": "builder-d4af9d2f7ad84fe5b80d381306ed4c05",
                                                                                "children": [
                                                                                    {
                                                                                        "@type": "@builder.io/sdk:Element",
                                                                                        "@version": 2,
                                                                                        "id": "builder-ab24bed4962945f9a52240fd63f273dc",
                                                                                        "component": {
                                                                                            "name": "Text",
                                                                                            "options": {
                                                                                                "text": "Steering Committee"
                                                                                            },
                                                                                            "isRSC": null
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                "responsiveStyles": {
                                                                                    "large": {
                                                                                        "background": "none",
                                                                                        "border": "none",
                                                                                        "color": "rgb(255, 255, 255)",
                                                                                        "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                                                                                        "fontSize": "14px",
                                                                                        "cursor": "pointer",
                                                                                        "textDecoration": "underline",
                                                                                        "padding": "0"
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        "responsiveStyles": {
                                                                            "large": {
                                                                                "marginBottom": "8px"
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "tagName": "li",
                                                                        "id": "builder-9beb24c70615454b8aaafad89439acc8",
                                                                        "children": [
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "actions": {
                                                                                    "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                },
                                                                                "code": {
                                                                                    "actions": {
                                                                                        "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                    }
                                                                                },
                                                                                "tagName": "button",
                                                                                "id": "builder-cee2a99a46a24ec2bed6213966ba7edd",
                                                                                "properties": {
                                                                                    "role": "button",
                                                                                    "aria-label": "Visit Cancer Research Data Commons",
                                                                                    "class": "builder-cee2a99a46a24ec2bed6213966ba7edd"
                                                                                },
                                                                                "class": "builder-cee2a99a46a24ec2bed6213966ba7edd",
                                                                                "children": [
                                                                                    {
                                                                                        "@type": "@builder.io/sdk:Element",
                                                                                        "@version": 2,
                                                                                        "id": "builder-310d4a8fae9043c184984b4ec6eafb6b",
                                                                                        "component": {
                                                                                            "name": "Text",
                                                                                            "options": {
                                                                                                "text": "CRDC"
                                                                                            },
                                                                                            "isRSC": null
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                "responsiveStyles": {
                                                                                    "large": {
                                                                                        "background": "none",
                                                                                        "border": "none",
                                                                                        "color": "rgb(255, 255, 255)",
                                                                                        "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                                                                                        "fontSize": "14px",
                                                                                        "cursor": "pointer",
                                                                                        "textDecoration": "underline",
                                                                                        "padding": "0"
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        "responsiveStyles": {
                                                                            "large": {
                                                                                "marginBottom": "8px"
                                                                            }
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "listStyle": "none",
                                                                        "padding": "0",
                                                                        "margin": "0"
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "@type": "@builder.io/sdk:Element",
                                                        "@version": 2,
                                                        "tagName": "div",
                                                        "id": "builder-682243c4f25b4e7d8d0623f34162e2dd",
                                                        "children": [
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "h4",
                                                                "id": "builder-a2b465ff53c0414299ed1dd5b765d7b1",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "id": "builder-08f389b1e95c4f089052e010c6809a76",
                                                                        "component": {
                                                                            "name": "Text",
                                                                            "options": {
                                                                                "text": "System Info"
                                                                            },
                                                                            "isRSC": null
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "fontFamily": "Raleway, sans-serif",
                                                                        "fontSize": "16px",
                                                                        "fontWeight": "600",
                                                                        "marginBottom": "16px",
                                                                        "color": "rgb(255, 255, 255)"
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "ul",
                                                                "id": "builder-52c33acdee3246d1a5a1781e04abb8c7",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "tagName": "li",
                                                                        "id": "builder-3a79dda120d64086b8b4ee2aed5d079a",
                                                                        "children": [
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "actions": {
                                                                                    "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                },
                                                                                "code": {
                                                                                    "actions": {
                                                                                        "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                    }
                                                                                },
                                                                                "tagName": "button",
                                                                                "id": "builder-3414533955f2405591d36d59ffd86245",
                                                                                "properties": {
                                                                                    "role": "button",
                                                                                    "aria-label": "View system release notes",
                                                                                    "class": "builder-3414533955f2405591d36d59ffd86245"
                                                                                },
                                                                                "class": "builder-3414533955f2405591d36d59ffd86245",
                                                                                "children": [
                                                                                    {
                                                                                        "@type": "@builder.io/sdk:Element",
                                                                                        "@version": 2,
                                                                                        "id": "builder-b079b98c1f664470a16e5301b7474b4a",
                                                                                        "component": {
                                                                                            "name": "Text",
                                                                                            "options": {
                                                                                                "text": "Release Notes"
                                                                                            },
                                                                                            "isRSC": null
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                "responsiveStyles": {
                                                                                    "large": {
                                                                                        "background": "none",
                                                                                        "border": "none",
                                                                                        "color": "rgb(255, 255, 255)",
                                                                                        "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                                                                                        "fontSize": "14px",
                                                                                        "cursor": "pointer",
                                                                                        "textDecoration": "underline",
                                                                                        "padding": "0"
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        "responsiveStyles": {
                                                                            "large": {
                                                                                "marginBottom": "8px"
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "tagName": "li",
                                                                        "id": "builder-dfb5076d276d4dbbb538d7085a57a88b",
                                                                        "children": [
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "id": "builder-2759ec3999ac4d30be4790a44368954f",
                                                                                "component": {
                                                                                    "name": "Text",
                                                                                    "options": {
                                                                                        "text": "FE Version: v2.1.0.156"
                                                                                    },
                                                                                    "isRSC": null
                                                                                }
                                                                            }
                                                                        ],
                                                                        "responsiveStyles": {
                                                                            "large": {
                                                                                "marginBottom": "8px",
                                                                                "fontSize": "12px",
                                                                                "color": "rgb(203, 226, 238)"
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "tagName": "li",
                                                                        "id": "builder-c325605e55e24daeab164612e06509c2",
                                                                        "children": [
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "id": "builder-d9321a9a4363434ebae7725b6b587574",
                                                                                "component": {
                                                                                    "name": "Text",
                                                                                    "options": {
                                                                                        "text": "BE Version: 8.4.1.89"
                                                                                    },
                                                                                    "isRSC": null
                                                                                }
                                                                            }
                                                                        ],
                                                                        "responsiveStyles": {
                                                                            "large": {
                                                                                "marginBottom": "8px",
                                                                                "fontSize": "12px",
                                                                                "color": "rgb(203, 226, 238)"
                                                                            }
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "listStyle": "none",
                                                                        "padding": "0",
                                                                        "margin": "0"
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "@type": "@builder.io/sdk:Element",
                                                        "@version": 2,
                                                        "tagName": "div",
                                                        "id": "builder-c6a736ffa1264d59853db976cfa65277",
                                                        "children": [
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "h4",
                                                                "id": "builder-85bea1809c8b47da99df6f943ce216ac",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "id": "builder-cdcd2a7e166b4e428c388f2122a4ee3f",
                                                                        "component": {
                                                                            "name": "Text",
                                                                            "options": {
                                                                                "text": "Policies"
                                                                            },
                                                                            "isRSC": null
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "fontFamily": "Raleway, sans-serif",
                                                                        "fontSize": "16px",
                                                                        "fontWeight": "600",
                                                                        "marginBottom": "16px",
                                                                        "color": "rgb(255, 255, 255)"
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "tagName": "ul",
                                                                "id": "builder-2960568dfd4f4a80bb55f759469d7325",
                                                                "children": [
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "tagName": "li",
                                                                        "id": "builder-a506c82c90984ab7bd0de012407bc016",
                                                                        "children": [
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "actions": {
                                                                                    "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                },
                                                                                "code": {
                                                                                    "actions": {
                                                                                        "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                    }
                                                                                },
                                                                                "tagName": "button",
                                                                                "id": "builder-8ef2db74c68946be93d6e5374273ac6e",
                                                                                "properties": {
                                                                                    "role": "button",
                                                                                    "aria-label": "Read disclaimer",
                                                                                    "class": "builder-8ef2db74c68946be93d6e5374273ac6e"
                                                                                },
                                                                                "class": "builder-8ef2db74c68946be93d6e5374273ac6e",
                                                                                "children": [
                                                                                    {
                                                                                        "@type": "@builder.io/sdk:Element",
                                                                                        "@version": 2,
                                                                                        "id": "builder-4eebcc8c875e4cbca6868971684eef93",
                                                                                        "component": {
                                                                                            "name": "Text",
                                                                                            "options": {
                                                                                                "text": "Disclaimer"
                                                                                            },
                                                                                            "isRSC": null
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                "responsiveStyles": {
                                                                                    "large": {
                                                                                        "background": "none",
                                                                                        "border": "none",
                                                                                        "color": "rgb(255, 255, 255)",
                                                                                        "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                                                                                        "fontSize": "14px",
                                                                                        "cursor": "pointer",
                                                                                        "textDecoration": "underline",
                                                                                        "padding": "0"
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        "responsiveStyles": {
                                                                            "large": {
                                                                                "marginBottom": "8px"
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "tagName": "li",
                                                                        "id": "builder-065aac6ec4a24e98be021e0eed9652ee",
                                                                        "children": [
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "actions": {
                                                                                    "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                },
                                                                                "code": {
                                                                                    "actions": {
                                                                                        "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                    }
                                                                                },
                                                                                "tagName": "button",
                                                                                "id": "builder-1ca8b2d624a24a55a1b3776fcf6b6a23",
                                                                                "properties": {
                                                                                    "role": "button",
                                                                                    "aria-label": "View accessibility information",
                                                                                    "class": "builder-1ca8b2d624a24a55a1b3776fcf6b6a23"
                                                                                },
                                                                                "class": "builder-1ca8b2d624a24a55a1b3776fcf6b6a23",
                                                                                "children": [
                                                                                    {
                                                                                        "@type": "@builder.io/sdk:Element",
                                                                                        "@version": 2,
                                                                                        "id": "builder-eddd4a6525ff4870a9c0f713c525ab8b",
                                                                                        "component": {
                                                                                            "name": "Text",
                                                                                            "options": {
                                                                                                "text": "Accessibility"
                                                                                            },
                                                                                            "isRSC": null
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                "responsiveStyles": {
                                                                                    "large": {
                                                                                        "background": "none",
                                                                                        "border": "none",
                                                                                        "color": "rgb(255, 255, 255)",
                                                                                        "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                                                                                        "fontSize": "14px",
                                                                                        "cursor": "pointer",
                                                                                        "textDecoration": "underline",
                                                                                        "padding": "0"
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        "responsiveStyles": {
                                                                            "large": {
                                                                                "marginBottom": "8px"
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        "@type": "@builder.io/sdk:Element",
                                                                        "@version": 2,
                                                                        "tagName": "li",
                                                                        "id": "builder-bb1c3ac4b744410a93325deea62ca2ce",
                                                                        "children": [
                                                                            {
                                                                                "@type": "@builder.io/sdk:Element",
                                                                                "@version": 2,
                                                                                "actions": {
                                                                                    "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                },
                                                                                "code": {
                                                                                    "actions": {
                                                                                        "keyDown": "\n  if (event.key === \"Enter\" || event.key === \" \") {\n    event.preventDefault();\n  }\n"
                                                                                    }
                                                                                },
                                                                                "tagName": "button",
                                                                                "id": "builder-ea7c437d4290475ead73aa02dc4384f4",
                                                                                "properties": {
                                                                                    "role": "button",
                                                                                    "aria-label": "View privacy policy",
                                                                                    "class": "builder-ea7c437d4290475ead73aa02dc4384f4"
                                                                                },
                                                                                "class": "builder-ea7c437d4290475ead73aa02dc4384f4",
                                                                                "children": [
                                                                                    {
                                                                                        "@type": "@builder.io/sdk:Element",
                                                                                        "@version": 2,
                                                                                        "id": "builder-8b0f712ab0d442918943b44ddeda873c",
                                                                                        "component": {
                                                                                            "name": "Text",
                                                                                            "options": {
                                                                                                "text": "Privacy"
                                                                                            },
                                                                                            "isRSC": null
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                "responsiveStyles": {
                                                                                    "large": {
                                                                                        "background": "none",
                                                                                        "border": "none",
                                                                                        "color": "rgb(255, 255, 255)",
                                                                                        "fontFamily": "Roboto, Helvetica, Arial, sans-serif",
                                                                                        "fontSize": "14px",
                                                                                        "cursor": "pointer",
                                                                                        "textDecoration": "underline",
                                                                                        "padding": "0"
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        "responsiveStyles": {
                                                                            "large": {
                                                                                "marginBottom": "8px"
                                                                            }
                                                                        }
                                                                    }
                                                                ],
                                                                "responsiveStyles": {
                                                                    "large": {
                                                                        "listStyle": "none",
                                                                        "padding": "0",
                                                                        "margin": "0"
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "responsiveStyles": {
                                                    "large": {
                                                        "display": "grid",
                                                        "gridTemplateColumns": "repeat(auto-fit, minmax(200px, 1fr))",
                                                        "gap": "40px",
                                                        "marginBottom": "40px"
                                                    },
                                                    "small": {
                                                        "gridTemplateColumns": "1fr",
                                                        "gap": "24px"
                                                    }
                                                }
                                            },
                                            {
                                                "@type": "@builder.io/sdk:Element",
                                                "@version": 2,
                                                "tagName": "div",
                                                "id": "builder-435f5c6fbb694afb952a7626b96315d0",
                                                "children": [
                                                    {
                                                        "@type": "@builder.io/sdk:Element",
                                                        "@version": 2,
                                                        "tagName": "p",
                                                        "id": "builder-2b557ace536f404193775076ff870ccf",
                                                        "children": [
                                                            {
                                                                "@type": "@builder.io/sdk:Element",
                                                                "@version": 2,
                                                                "id": "builder-50ecfd8216b04ea19d549df20b9a2879",
                                                                "component": {
                                                                    "name": "Text",
                                                                    "options": {
                                                                        "text": "© 2024 National Cancer Institute. All rights reserved."
                                                                    },
                                                                    "isRSC": null
                                                                }
                                                            }
                                                        ],
                                                        "responsiveStyles": {
                                                            "large": {
                                                                "fontFamily": "Open Sans, sans-serif",
                                                                "fontSize": "12px",
                                                                "color": "rgb(203, 226, 238)",
                                                                "margin": "0"
                                                            }
                                                        }
                                                    }
                                                ],
                                                "responsiveStyles": {
                                                    "large": {
                                                        "borderTop": "1px solid rgba(255, 255, 255, 0.2)",
                                                        "paddingTop": "20px",
                                                        "textAlign": "center"
                                                    }
                                                }
                                            }
                                        ],
                                        "responsiveStyles": {
                                            "large": {
                                                "maxWidth": "1400px",
                                                "margin": "0 auto"
                                            }
                                        }
                                    }
                                ],
                                "responsiveStyles": {
                                    "large": {
                                        "backgroundColor": "rgb(35, 53, 91)",
                                        "color": "rgb(255, 255, 255)",
                                        "padding": "40px 47px 20px"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "id": "builder-pixel-7i1phc4l5hc",
                        "@type": "@builder.io/sdk:Element",
                        "tagName": "img",
                        "properties": {
                            "src": "https://cdn.builder.io/api/v1/pixel?apiKey=3508adaa54f54186a03449ad4f2e6bb3",
                            "aria-hidden": "true",
                            "alt": "",
                            "role": "presentation",
                            "width": "0",
                            "height": "0"
                        },
                        "responsiveStyles": {
                            "large": {
                                "height": "0",
                                "width": "0",
                                "display": "inline-block",
                                "opacity": "0",
                                "overflow": "hidden",
                                "pointerEvents": "none"
                            }
                        }
                    }
                ],
                "url": "/home"
            },
            "variations": {},
            "lastUpdated": 1753219033983,
            "firstPublished": 1753153806481,
            "testRatio": 1,
            "screenshot": "https://cdn.builder.io/api/v1/image/assets%2F3508adaa54f54186a03449ad4f2e6bb3%2Fd820f62669744dfa9ee8639334eb85d4",
            "createdBy": "Ke9ipjsJAHRoTdmB8XSzaWhXJpP2",
            "lastUpdatedBy": "Ke9ipjsJAHRoTdmB8XSzaWhXJpP2",
            "folders": [],
            "rev": "odiwfbadptf"
        }
    ]
};
