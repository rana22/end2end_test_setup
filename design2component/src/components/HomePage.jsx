"use client";
import * as React from 'react';
import { useState } from 'react'

/** @jsx jsx */
import { jsx } from '@emotion/react'

function HomePage() {
  const [searchQuery, setSearchQuery] = useState(() => (""))
  const [activeSection, setActiveSection] = useState(() => ("programs"))

  function handleSearch() {
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // In a real app, this would trigger a search API call
    }
  }

  function navigateToSection(section) {
    setActiveSection(section);
    console.log("Navigating to:", section);
    // In a real app, this would handle routing
  }

  function viewStudies(program) {
    console.log("Viewing studies for:", program);
    // In a real app, this would navigate to studies page
  }

  function visitExternalSite(url) {
    console.log("Visiting external site:", url);
    // In a real app, this would open external URL
  }

  function exploreData() {
    console.log("Exploring research data");
    // In a real app, this would navigate to data exploration page
  }

  function contactHelp() {
    console.log("Contacting help desk");
    // In a real app, this would open contact form or email
  }

  function viewReleaseNotes() {
    console.log("Viewing release notes");
    // In a real app, this would show release notes modal or page
  }

  function viewPolicy(policy) {
    console.log("Viewing policy:", policy);
    // In a real app, this would show policy document
  }

  return (
    <>
      <div css={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        flexShrink: '0',
        boxSizing: 'border-box',
        marginTop: '20px',
        height: 'auto'
      }}>
        <header
          className="header-component"
          css={{
            position: 'fixed',
            backgroundColor: 'rgb(255, 255, 255)',
            top: '0',
            left: '0',
            right: '0',
            zIndex: '9999',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div
            css={{
              height: '20px',
              backgroundColor: 'rgb(241, 241, 241)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgb(0, 0, 0)',
              font: '12px Open Sans, sans-serif',
            }}
          >
            NCI Cancer Research Data Commons
          </div>
          <div
            css={{
              backgroundColor: 'rgb(255, 255, 255)',
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 47px',
              maxWidth: '1400px',
              margin: '0 auto',
              width: '100%',
            }}
          >
            <img
              src="/assets/icon/logo.svg"
              alt="Cancer Research Data Commons Logo"
              css={{
                aspectRatio: '7.19',
                objectFit: 'cover',
                objectPosition: 'center',
                width: '300%',
                flexShrink: '0',
                boxSizing: 'border-box',
                minHeight: '20px',
                minWidth: '20px',
                overflow: 'hidden',
                maxWidth: '512px',
                height: 'auto',
                alignSelf: 'stretch',
                margin: 'auto auto auto 0',
              }}
            />
            <div
              css={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                alt="National Cancer Institute Logo"
                src="https://raw.githubusercontent.com/CBIIT/datacommons-assets/master/icdc/images/svgs/icdc_nih_logo.svg"
                css={{
                  aspectRatio: '0.37',
                  objectFit: 'contain',
                  objectPosition: 'center',
                  width: 'auto',
                  height: '60px',
                  overflow: 'hidden',
                }}
              />
            </div>
            <div
              css={{
                display: 'flex',
                alignItems: 'center',
                flex: '1',
                justifyContent: 'flex-end',
                maxWidth: '400px',
              }}
            >
              <div
                css={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '300px',
                }}
              >
                <label
                  htmlFor="search-input"
                  css={{
                    position: 'absolute',
                    left: '-9999px',
                    width: '1px',
                    height: '1px',
                    overflow: 'hidden',
                  }}
                >
                  Search the ICDC
                </label>
                <input
                  type="text"
                  id="search-input"
                  placeholder="SEARCH THE ICDC"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  className="builder-22e8d4da6f2d48b8a6a688c9563fe0e1"
                  css={{
                    width: '100%',
                    padding: '12px 45px 12px 15px',
                    border: '2px solid rgb(74, 142, 203)',
                    borderRadius: '8px',
                    backgroundColor: 'rgb(255, 255, 255)',
                    font: '14px Open Sans, sans-serif',
                  }}
                />
                <button
                  onClick={handleSearch}
                  css={{
                    position: 'absolute',
                    right: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px',
                    color: 'rgb(74, 142, 203)',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <nav
            css={{
              backgroundColor: 'rgb(11, 53, 87)',
              height: '39px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              css={{
                maxWidth: '1400px',
                width: '100%',
                padding: '0 47px',
              }}
            >
              <ul
                css={{
                  display: 'flex',
                  listStyle: 'none',
                  margin: '0',
                  padding: '0',
                  alignItems: 'center',
                  height: '39px',
                }}
              >
                {['home', 'explore', 'programs', 'studies', 'data', 'resources', 'about'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => navigateToSection(item)}
                      className="builder-dfb348342694467e91ccb8d78312b6f5"
                      css={{
                        background: 'none',
                        border: 'none',
                        color: 'rgb(255, 255, 255)',
                        padding: '0 20px',
                        cursor: 'pointer',
                        height: '39px',
                        textTransform: 'lowercase',
                        backgroundColor: activeSection === item ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                        transition: 'background-color 0.3s ease',
                        font: '600 14px Open Sans, sans-serif',
                      }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </header>
        
        <main
          className="main-content-component"
          css={{
            backgroundColor: 'rgb(250, 250, 250)',
            minHeight: 'calc(100vh - 159px)',
            marginTop: '159px',
          }}
        >
          <section
            css={{
              backgroundColor: 'rgb(203, 226, 238)',
              padding: '24px 47px',
              borderBottom: '1px solid rgb(74, 142, 203)',
            }}
          >
            <div
              css={{
                maxWidth: '1400px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '24px',
                '@media (max-width: 991px)': {
                  flexDirection: 'column',
                  gap: '16px',
                },
              }}
            >
              {[
                { value: '15.2 TB', label: 'Data Volume' },
                { value: '5', label: 'Programs' },
                { value: '23', label: 'Studies' },
                { value: '1,847', label: 'Cases' },
                { value: '3,294', label: 'Samples' },
                { value: '5,672', label: 'Case Files' },
              ].map((stat, index) => (
                <div
                  key={index}
                  css={{
                    textAlign: 'center',
                    minWidth: '120px',
                  }}
                >
                  <div
                    css={{
                      color: 'rgb(37, 85, 126)',
                      marginBottom: '4px',
                      font: '700 24px Inter, sans-serif',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    css={{
                      color: 'rgb(0, 0, 0)',
                      font: '600 12px Open Sans, sans-serif',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section
            css={{
              backgroundColor: 'rgb(255, 255, 255)',
              padding: '60px 47px',
              textAlign: 'center',
              borderBottom: '1px solid rgb(203, 226, 238)',
            }}
          >
            <div
              css={{
                maxWidth: '1400px',
                margin: '0 auto',
              }}
            >
              <img
                alt="Healthy golden retriever dogs running together in an open field"
                src="https://images.pexels.com/photos/8160757/pexels-photo-8160757.jpeg"
                css={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  width: '100%',
                  maxWidth: '1105px',
                  height: 'auto',
                  borderRadius: '8px',
                  marginBottom: '24px',
                  overflow: 'hidden',
                }}
              />
              <div
                css={{
                  color: 'rgb(37, 85, 126)',
                  marginBottom: '16px',
                  letterSpacing: '0.5px',
                  '@media (max-width: 640px)': {
                    fontSize: '24px',
                  },
                  font: '600 32px Raleway, sans-serif',
                }}
              >
                Advancing Canine Cancer Research
              </div>
              <div
                css={{
                  color: 'rgb(0, 0, 0)',
                  maxWidth: '600px',
                  margin: '0 auto',
                  marginBottom: '24px',
                  '@media (max-width: 640px)': {
                    fontSize: '16px',
                  },
                  font: '18px/1.6 Open Sans, sans-serif',
                }}
              >
                Through comparative oncology research, we study naturally
                occurring cancers in dogs to advance treatments for both canine
                and human patients. Our research helps improve the quality of life
                for our beloved companions while contributing to breakthrough
                cancer therapies.
              </div>
              <div
                css={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '16px',
                  flexWrap: 'wrap',
                  marginTop: '32px',
                }}
              >
                <button
                  onClick={() => viewStudies('all')}
                  className="builder-b24583d9a17d4af78f70764b8264aa85"
                  css={{
                    backgroundColor: 'rgb(18, 91, 130)',
                    color: 'rgb(255, 255, 255)',
                    padding: '15px 30px',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    font: '600 16px Lato, sans-serif',
                  }}
                >
                  Learn About Our Studies
                </button>
                <button
                  onClick={exploreData}
                  className="builder-6534c1ac93584d7191879bd79c78d739"
                  css={{
                    backgroundColor: 'rgb(245, 245, 245)',
                    color: 'rgb(37, 85, 126)',
                    padding: '15px 30px',
                    border: '2px solid rgb(74, 142, 203)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    font: '600 16px Lato, sans-serif',
                  }}
                >
                  Explore Data
                </button>
              </div>
            </div>
          </section>
          
          <section
            css={{
              padding: '60px 47px',
              backgroundColor: 'rgb(250, 250, 250)',
            }}
          >
            <div
              css={{
                maxWidth: '1400px',
                margin: '0 auto',
              }}
            >
              <div
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '40px',
                  gap: '16px',
                }}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="rgb(0, 102, 15)"
                  css={{
                    flexShrink: '0',
                  }}
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <h2
                  css={{
                    color: 'rgb(0, 102, 15)',
                    margin: '0',
                    font: '600 28px Raleway, sans-serif',
                  }}
                >
                  Research Programs
                </h2>
              </div>
              <div
                css={{
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderRadius: '8px',
                  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px 0px',
                  overflow: 'hidden',
                }}
              >
                {[
                  {
                    title: 'Comparative Oncology Program',
                    studies: '8 Studies',
                    description: 'The Comparative Oncology Program advances cancer research by studying naturally occurring cancers in companion animals. This approach provides valuable insights into cancer biology and treatment development that benefit both veterinary and human medicine.',
                    image: 'https://images.pexels.com/photos/7470631/pexels-photo-7470631.jpeg',
                    imageAlt: 'Veterinarian examining a dog for cancer research',
                    hasExternalSite: true,
                  },
                  {
                    title: 'Canine Genomics Program',
                    studies: '12 Studies',
                    description: 'The Canine Genomics Program focuses on understanding the genetic basis of cancer in dogs. By analyzing genomic data from canine cancer patients, we identify genetic markers and pathways that contribute to cancer development and progression.',
                    image: 'https://images.pexels.com/photos/25626515/pexels-photo-25626515.jpeg',
                    imageAlt: 'DNA sequencing and genomic research laboratory',
                    hasExternalSite: false,
                  },
                  {
                    title: 'Immunotherapy Research Program',
                    studies: '3 Studies',
                    description: 'The Immunotherapy Research Program develops and tests novel immunotherapeutic approaches for treating canine cancers. Our research explores how to harness the immune system to fight cancer more effectively in both dogs and humans.',
                    image: 'https://images.pexels.com/photos/6436314/pexels-photo-6436314.jpeg',
                    imageAlt: 'Immune cells and cancer treatment research',
                    hasExternalSite: true,
                  },
                ].map((program, index) => (
                  <div
                    key={index}
                    css={{
                      borderBottom: index < 2 ? '1px solid rgb(203, 226, 238)' : 'none',
                      display: 'flex',
                      '@media (max-width: 991px)': {
                        flexDirection: 'column',
                      },
                    }}
                  >
                    <div
                      css={{
                        flex: '1',
                        padding: '0',
                      }}
                    >
                      <div
                        css={{
                          backgroundColor: 'rgb(0, 102, 15)',
                          color: 'rgb(255, 255, 255)',
                          padding: '16px 24px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <h3
                          css={{
                            margin: '0',
                            font: '600 18px Raleway, sans-serif',
                          }}
                        >
                          {program.title}
                        </h3>
                        <span
                          css={{
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            padding: '4px 12px',
                            borderRadius: '16px',
                            fontSize: '14px',
                            fontWeight: '600',
                          }}
                        >
                          {program.studies}
                        </span>
                      </div>
                      <div
                        css={{
                          padding: '24px',
                        }}
                      >
                        <p
                          css={{
                            color: 'rgb(0, 0, 0)',
                            margin: '0 0 24px 0',
                            font: '14px/1.6 Open Sans, sans-serif',
                          }}
                        >
                          {program.description}
                        </p>
                        <div
                          css={{
                            display: 'flex',
                            gap: '12px',
                            flexWrap: 'wrap',
                          }}
                        >
                          <button
                            onClick={() => viewStudies(program.title)}
                            className="builder-702218ccfa51404aba7c6c76f164cd32"
                            css={{
                              backgroundColor: 'rgb(18, 91, 130)',
                              color: 'rgb(255, 255, 255)',
                              padding: '9px 15px',
                              border: 'none',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              transition: 'background-color 0.3s ease',
                              font: '600 14px Lato, sans-serif',
                            }}
                          >
                            Associated Studies
                          </button>
                          {program.hasExternalSite && (
                            <button
                              onClick={() => visitExternalSite(program.title)}
                              className="builder-31354d72fa8d4a37a2fbca8336f82a45"
                              css={{
                                backgroundColor: 'rgb(245, 245, 245)',
                                color: 'rgb(37, 85, 126)',
                                padding: '9px 15px',
                                border: '2px solid rgb(74, 142, 203)',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                font: '600 14px Lato, sans-serif',
                              }}
                            >
                              Go to site
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div
                      css={{
                        width: '200px',
                        '@media (max-width: 991px)': {
                          width: '100%',
                          height: '200px',
                        },
                      }}
                    >
                      <img
                        alt={program.imageAlt}
                        src={program.image}
                        css={{
                          objectFit: 'cover',
                          objectPosition: 'center',
                          width: '100%',
                          height: '100%',
                          overflow: 'hidden',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        
        <footer
          className="footer-component"
          css={{
            backgroundColor: 'rgb(35, 53, 91)',
            color: 'rgb(255, 255, 255)',
            padding: '40px 47px 20px',
          }}
        >
          <div
            css={{
              maxWidth: '1400px',
              margin: '0 auto',
            }}
          >
            <div
              css={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '40px',
                marginBottom: '40px',
                '@media (max-width: 640px)': {
                  gridTemplateColumns: '1fr',
                  gap: '24px',
                },
              }}
            >
              <div>
                <h4
                  css={{
                    marginBottom: '16px',
                    color: 'rgb(255, 255, 255)',
                    font: '600 16px Raleway, sans-serif',
                  }}
                >
                  Contact Information
                </h4>
                <ul
                  css={{
                    listStyle: 'none',
                    padding: '0',
                    margin: '0',
                  }}
                >
                  <li
                    css={{
                      marginBottom: '8px',
                    }}
                  >
                    <button
                      onClick={contactHelp}
                      className="builder-402dc544f34c4cc2bce24f0e05b1f95f"
                      css={{
                        background: 'none',
                        border: 'none',
                        color: 'rgb(255, 255, 255)',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        padding: '0',
                        font: '14px Roboto, Helvetica, Arial, sans-serif',
                      }}
                    >
                      CCRC Help Desk
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h4
                  css={{
                    marginBottom: '16px',
                    color: 'rgb(255, 255, 255)',
                    font: '600 16px Raleway, sans-serif',
                  }}
                >
                  More Information
                </h4>
                <ul
                  css={{
                    listStyle: 'none',
                    padding: '0',
                    margin: '0',
                  }}
                >
                  {[
                    { label: 'CCRC Home', action: () => navigateToSection('home') },
                    { label: 'Steering Committee', action: () => console.log('Steering Committee') },
                    { label: 'CRDC', action: () => visitExternalSite('CRDC') },
                  ].map((link, index) => (
                    <li key={index} css={{ marginBottom: '8px' }}>
                      <button
                        onClick={link.action}
                        className="builder-2b8785ae22274f14b18b77816e320a71"
                        css={{
                          background: 'none',
                          border: 'none',
                          color: 'rgb(255, 255, 255)',
                          cursor: 'pointer',
                          textDecoration: 'underline',
                          padding: '0',
                          font: '14px Roboto, Helvetica, Arial, sans-serif',
                        }}
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4
                  css={{
                    marginBottom: '16px',
                    color: 'rgb(255, 255, 255)',
                    font: '600 16px Raleway, sans-serif',
                  }}
                >
                  System Info
                </h4>
                <ul
                  css={{
                    listStyle: 'none',
                    padding: '0',
                    margin: '0',
                  }}
                >
                  <li css={{ marginBottom: '8px' }}>
                    <button
                      onClick={viewReleaseNotes}
                      className="builder-1316cf666736487b84847350ea475666"
                      css={{
                        background: 'none',
                        border: 'none',
                        color: 'rgb(255, 255, 255)',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        padding: '0',
                        font: '14px Roboto, Helvetica, Arial, sans-serif',
                      }}
                    >
                      Release Notes
                    </button>
                  </li>
                  <li
                    css={{
                      marginBottom: '8px',
                      fontSize: '12px',
                      color: 'rgb(203, 226, 238)',
                    }}
                  >
                    FE Version: v2.1.0.156
                  </li>
                  <li
                    css={{
                      marginBottom: '8px',
                      fontSize: '12px',
                      color: 'rgb(203, 226, 238)',
                    }}
                  >
                    BE Version: 8.4.1.89
                  </li>
                </ul>
              </div>
              <div>
                <h4
                  css={{
                    marginBottom: '16px',
                    color: 'rgb(255, 255, 255)',
                    font: '600 16px Raleway, sans-serif',
                  }}
                >
                  Policies
                </h4>
                <ul
                  css={{
                    listStyle: 'none',
                    padding: '0',
                    margin: '0',
                  }}
                >
                  {[
                    { label: 'Disclaimer', policy: 'disclaimer' },
                    { label: 'Accessibility', policy: 'accessibility' },
                    { label: 'Privacy', policy: 'privacy' },
                  ].map((policy, index) => (
                    <li key={index} css={{ marginBottom: '8px' }}>
                      <button
                        onClick={() => viewPolicy(policy.policy)}
                        className="builder-5fb0cf9822244394a6e4a041bedef352"
                        css={{
                          background: 'none',
                          border: 'none',
                          color: 'rgb(255, 255, 255)',
                          cursor: 'pointer',
                          textDecoration: 'underline',
                          padding: '0',
                          font: '14px Roboto, Helvetica, Arial, sans-serif',
                        }}
                      >
                        {policy.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              css={{
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                paddingTop: '20px',
                textAlign: 'center',
              }}
            >
              <p
                css={{
                  color: 'rgb(203, 226, 238)',
                  margin: '0',
                  font: '12px Open Sans, sans-serif',
                }}
              >
                © 2024 National Cancer Institute. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
      
      <style>{`.builder-22e8d4da6f2d48b8a6a688c9563fe0e1:focus {
    outline: none;
    border-color: rgb(18, 91, 130)
}
.builder-dfb348342694467e91ccb8d78312b6f5:hover {
    background-color: rgba(255, 255, 255, 0.1)
}
.builder-dfb348342694467e91ccb8d78312b6f5:focus {
    outline: 2px solid rgb(255, 255, 255);
    outline-offset: -2px
}
.builder-2c64e878ac7d4987a215cfdbf557ab36:hover {
    background-color: rgba(255, 255, 255, 0.1)
}
.builder-2c64e878ac7d4987a215cfdbf557ab36:focus {
    outline: 2px solid rgb(255, 255, 255);
    outline-offset: -2px
}
.builder-b4a80a607db1471399e8e217f5db22ef:hover {
    background-color: rgba(255, 255, 255, 0.2)
}
.builder-b4a80a607db1471399e8e217f5db22ef:focus {
    outline: 2px solid rgb(255, 255, 255);
    outline-offset: -2px
}
.builder-ea137d9b4c3a4934975e99350eaab24c:hover {
    background-color: rgba(255, 255, 255, 0.1)
}
.builder-ea137d9b4c3a4934975e99350eaab24c:focus {
    outline: 2px solid rgb(255, 255, 255);
    outline-offset: -2px
}
.builder-08a23691ec474c0eb46c143dae2ee669:hover {
    background-color: rgba(255, 255, 255, 0.1)
}
.builder-08a23691ec474c0eb46c143dae2ee669:focus {
    outline: 2px solid rgb(255, 255, 255);
    outline-offset: -2px
}
.builder-befd4058af9f44afa52dfea14847309f:hover {
    background-color: rgba(255, 255, 255, 0.1)
}
.builder-befd4058af9f44afa52dfea14847309f:focus {
    outline: 2px solid rgb(255, 255, 255);
    outline-offset: -2px
}
.builder-c1a2f3d35a934ad782261a92ea476ac6:hover {
    background-color: rgba(255, 255, 255, 0.1)
}
.builder-c1a2f3d35a934ad782261a92ea476ac6:focus {
    outline: 2px solid rgb(255, 255, 255);
    outline-offset: -2px
}
.builder-b24583d9a17d4af78f70764b8264aa85:hover {
    background-color: rgb(37, 85, 126)
}
.builder-b24583d9a17d4af78f70764b8264aa85:focus {
    outline: 2px solid rgb(74, 142, 203);
    outline-offset: 2px
}
.builder-6534c1ac93584d7191879bd79c78d739:hover {
    background-color: rgb(203, 226, 238)
}
.builder-6534c1ac93584d7191879bd79c78d739:focus {
    outline: 2px solid rgb(74, 142, 203);
    outline-offset: 2px
}
.builder-702218ccfa51404aba7c6c76f164cd32:hover {
    background-color: rgb(37, 85, 126)
}
.builder-702218ccfa51404aba7c6c76f164cd32:focus {
    outline: 2px solid rgb(74, 142, 203);
    outline-offset: 2px
}
.builder-31354d72fa8d4a37a2fbca8336f82a45:hover {
    background-color: rgb(203, 226, 238)
}
.builder-31354d72fa8d4a37a2fbca8336f82a45:focus {
    outline: 2px solid rgb(74, 142, 203);
    outline-offset: 2px
}
.builder-2fe62f04d0724b07875401ff1a61b7b5:hover {
    background-color: rgb(37, 85, 126)
}
.builder-2fe62f04d0724b07875401ff1a61b7b5:focus {
    outline: 2px solid rgb(74, 142, 203);
    outline-offset: 2px
}
.builder-c5e4caba496d4720a2c75d9710e2200a:hover {
    background-color: rgb(37, 85, 126)
}
.builder-c5e4caba496d4720a2c75d9710e2200a:focus {
    outline: 2px solid rgb(74, 142, 203);
    outline-offset: 2px
}
.builder-43d18b14db15474da613bd950a779539:hover {
    background-color: rgb(203, 226, 238)
}
.builder-43d18b14db15474da613bd950a779539:focus {
    outline: 2px solid rgb(74, 142, 203);
    outline-offset: 2px
}
.builder-402dc544f34c4cc2bce24f0e05b1f95f:hover {
    color: rgb(203, 226, 238)
}
.builder-402dc544f34c4cc2bce24f0e05b1f95f:focus {
    outline: 2px solid rgb(255, 255, 255);
    outline-offset: 2px
}
.builder-2b8785ae22274f14b18b77816e320a71:hover {
    color: rgb(203, 226, 238)
}
.builder-2b8785ae22274f14b18b77816e320a71:focus {
    outline: 2px solid rgb(255, 255, 255);
    outline-offset: 2px
}
.builder-1316cf666736487b84847350ea475666:hover {
    color: rgb(203, 226, 238)
}
.builder-1316cf666736487b84847350ea475666:focus {
    outline: 2px solid rgb(255, 255, 255);
    outline-offset: 2px
}
.builder-5fb0cf9822244394a6e4a041bedef352:hover {
    color: rgb(203, 226, 238)
}
.builder-5fb0cf9822244394a6e4a041bedef352:focus {
    outline: 2px solid rgb(255, 255, 255);
    outline-offset: 2px
}
.builder-cd22d1dcdc334115bf1d22ed91c4d3fc:hover {
    color: rgb(203, 226, 238)
}
.builder-cd22d1dcdc334115bf1d22ed91c4d3fc:focus {
    outline: 2px solid rgb(255, 255, 255);
    outline-offset: 2px
}
.builder-db1d95f543874b858f04cf25041a8e8e:hover {
    color: rgb(203, 226, 238)
}
.builder-db1d95f543874b858f04cf25041a8e8e:focus {
    outline: 2px solid rgb(255, 255, 255);
    outline-offset: 2px
}
.builder-84941069e6794444993b94106f9e6b7a:hover {
    color: rgb(203, 226, 238)
}
.builder-84941069e6794444993b94106f9e6b7a:focus {
    outline: 2px solid rgb(255, 255, 255);
    outline-offset: 2px
}
.builder-d783db005fe3442db9e23d6dbe1fdcaa:hover {
    color: rgb(203, 226, 238)
}
.builder-d783db005fe3442db9e23d6dbe1fdcaa:focus {
    outline: 2px solid rgb(255, 255, 255);
    outline-offset: 2px
}`}</style>
    </>
  )
}

export default HomePage
