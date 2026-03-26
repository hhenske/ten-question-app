import { label } from "framer-motion/client";

export const questions = [
  {
    id: 1,

    question: "#1 Do you believe the Scriptures are true?",

    consider: {
      reference: "2 Timothy 3:16-17",
      text: "All Scripture is God-breathed and useful for teaching, rebuking, correcting and training in righteousness."
    },

    statement:
      "Yes, I believe the Scriptures are true.",
    
    explanation:
      "Biblical, archeological, and logical evidence exists to support the truth of scriptures.",

    tabs: {
      logical: {
        title: "Logical Evidence",

        points: [
          "Ancient non-Christian sources also mention the people, places, and events found in the New Testament. This outside evidence supports the main claims about Jesus and the early Christian movement. ",
          "While some people may disagree, there is strong manuscript evidence and careful copying that show the Bible was passed down accurately. Most differences are minor and have been well documented.",
          "Many people are skeptical about miracles and supernatural events in the Gospels. The disciples showed their sincerity by being honest about themselves, accepting suffering, and even facing death. This makes it unlikely they were trying to mislead anyone in the New Testament.",
        ],

        links: [
          {
            label: "From the CS Lewis Institute",
            url: "https://www.cslewisinstitute.org/resources/are-biblical-manuscripts-reliable/",
            type: "article"
          }
        ]
      },

      biblical: {
        title: "Biblical Evidence",

        verses: [
          {
            reference: "Matthew 24:35",
            text:
              "Heaven and earth will pass away, but my words will not pass away."
          },
          {
            reference: "Matthew 22:29",
            text:
              "You are in error because you do not know the Scriptures or the power of God."
          },
          {
            reference: "2 Peter 1:16",
            text:
              "We did not follow cleverly devised myths when we made known to you the power and coming of our Lord Jesus Christ."
          },
          {
            reference: "Isaiah 40:8",
            text:
              "The grass withers, the flower fades, but the word of our God will stand forever."
          }
        ]
      },
      resources: {
        title: "Resource Links",
        links: [
          {
            label: "Are the Gospels Reliable History?",
            url: "https://www.str.org/w/three-pieces-of-evidence-that-corroborate-the-gospels",
            type: "video"
          },
          {
            label: "6 Times the Bible Gives Evidence of its Authenticity",
            url: "https://www.biblestudytools.com/slideshows/6-times-the-bible-gives-evidence-of-its-authenticity.html",
            type: "article"
          },
          {
            label: "Tim Keller: Why is the Bible reliable?",
            url: "https://www.youtube.com/watch?v=UZAPFKXMy_Y",
            type: "video"
          },
          {
            label: "The Reason for God: Belief in an Age of Skepticism",
            url: "https://www.amazon.com/Reason-God-Belief-Age-Skepticism/dp/1594483493",
            type: "article"
          },
          {
            label: "Is the Bible reliable? (gotquestions.org)",
            url: "https://www.gotquestions.org/Bible-reliable.html",
            type: "article"
          },
          {
            label: "Why Don't You Use The King James Version?",
            url: "https://www.wisdomonline.org/blog/king-james-version/?srsltid=AfmBOorgQTeL_MQwrePV2bJyqpfUqQOI2TOvI2LEK_ZI8aELBwWN8N6R&_tag_jsr=1",
            type: "article"
          },
          {
            label:"Questioning Christianity Ep 1: Faith & Proof - Timothy Keller",
            url: "https://www.youtube.com/watch?v=qOE6jJ4EGqg",
            type: "video"
          }
        ]
      }
    }
  },

  {
    id: 2,

    question: "#2 Do you believe Jesus told the truth?",

    consider: {
      reference: "John 14:6",
      text:
        "[Jesus says] I am the way, and the truth, and the life. No one comes to the Father except through me."
    },

    statement:
      "Yes, I believe Jesus told the truth.",

    explanation:
      "Jesus claims to speak from God's authority.",

    tabs: {
      biblical: {
        title: "Biblical Evidence",

        verses: [
          {
            reference: "John 14:10",
            text:
              "Do you not believe that I am in the Father and the Father is in me? The words that I say to you I do not speak on my own authority, but the Father who dwells in me does his works. "
          },
          {
            reference: "John 18:37",
            text:
              "For this purpose I was born and have come into the world—to bear witness to the truth."
          },
          {
            reference: "Matthew 28:18",
            text:
              "All authority in heaven and on earth has been given to me."
          }
        ]
      },

      historical: {
        title: "Historical Evidence",

        points: [
          "Ignatius of Antioch wrote a letter to the Smyrnaeans (ca. AD 110) in which he claims that Jesus was crucified under Pontius Pilate and Herod the tetrarch and that “he suffered all these things for us; and He suffered them really, and not in appearance only, even as also He truly rose again",
          "Papius (ca. AD 5-110) wrote that he learned Jesus' teachings from those who had heard him in person.",
          "Phlegon (ca. AD 140) reported that Jesus had knowledge of future events and testified that the result corresponded to his predictions.",
          "TThallus (ca. AD 55), one of the earliest non-Christian writers to refer to Jesus, reported the supernatural darkness that accompanied the crucifixion of Jesus.",
          "Josephus (ca. AD 93) wrote, “And in this time, there was a certain Jesus, a wise man, if indeed one ought to call him a man, for he was a doer of incredible deeds, a teacher of men who receive truisms with pleasure. And he brought over many from among the Jews and many from among the Greeks. He was [thought to be] the Christ. And, when Pilate had condemned him to the cross at the accusation of the first men among us, those who at first were devoted to him did not cease to be so, for on the third day it seemed to them that he was alive again given that the divine prophets had spoken such things and thousands of other wonderful things about him. And up till now, the tribe of Christians, who were named from him, has not disappeared.",
          "Pliny the Younger (ca. AD 122) confirmed, in a letter to Trajan, not only that Christ was a real, historical figure, but also that Christians at that time believed in the divinity of Jesus and were meeting weekly to worship him."
        ],

        links: [
          {
            label: "From Top Ten Historical References to Jesus Outside of the Bible",
            url: "https://biblearchaeologyreport.com/2022/11/18/top-ten-historical-references-to-jesus-outside-of-the-bible/",
            type: "article"
          }
        ]
      },

      resources: {
        title: "Resource Links",
        links: [
          {
            label: "The Case for Christ by Lee Strobel",
            url: "https://www.amazon.com/Case-Christ-Journalists-Personal-Investigation/dp/0310209307",
            type: "article"
          },
          {
            label: "Questioning Christianity - Why We Can Believe in Jesus (Tim Keller)",
            url: "https://www.youtube.com/watch?v=7Hf7vdpv_Wc",
            type: "video"
          }
        ]
      }
    }
  },

  {
    id: 3,

    question: "#3 Do you believe Jesus came to 'seek and save that which was lost?'",

    consider: {
      reference: "Luke 19:10",
      text:
        "For the Son of Man came to seek and to save the lost."
    },

    statement:
      "Yes, Jesus said that he came to 'seek and save the lost.'",

    explanation:
      "God seeks those who are lost.",

    tabs: {
      biblical: {
        title: "Biblical Evidence",

        verses: [
          {
            reference: "Matthew 18:12-14",
            text:
              "What do you think? If a man has a hundred sheep, and one of them has gone astray, does he not leave the ninety-nine on the mountains and go in search of the one that went astray? And if he finds it, truly, I say to you, he rejoices over it more than over the ninety-nine that never went astray.  So it is not the will of my Father who is in heaven that one of these little ones should perish"
          },
          {
            reference: "1 Thessalonians 5:9",
            text:
              "God has not destined us for wrath, but to obtain salvation through our Lord Jesus Christ."
          },
          {
            reference: "Isaiah 53:6",
            text:
              "We all, like sheep, have gone astray, each of us has turned to our own way; and the Lord has laid on him the iniquity of us all."
          }
        ]
      },

      resources: {
        title: "Resource Links",
        links: [  
          {
            label: "With the Powerful: The Real Jesus (Audio sermon by Tim Keller)",
            url: "https://gospelinlife.com/sermon/with-the-powerful/",
            type: "article"
          }
        ]
      }
    }
  },

  {
    id: 4,

    question:
      "#4 Did Jesus say WHY He came to 'seek and save the lost?'",

    consider: {
      reference: "John 3:16-17",
      text:
        "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. For God did not send his Son into the world to condemn the world, but in order that the world might be saved through him."
    },

    statement:
      "Yes, because God loves the lost.",

    explanation:
      "God demonstrates his love for us.",

    tabs: {
      biblical: {
        title: "Biblical Evidence",

        verses: [
          
          {
            reference: "Romans 5:8",
            text:
              "God demonstrates His love for us in this: while we were still sinners, Christ died for us."
          },
          {
            reference: "Ephesians 2:4-5",
            text:
              "Because of His great love, God made us alive with Christ."
          },
          {
            reference: "Ephesians 1:3-10",
            text:
              "Praise be to the God and Father of our Lord Jesus Christ, who has blessed us in the heavenly realms with every spiritual blessing in Christ. For he chose us in him before the creation of the world to be holy and blameless in his sight. In love he predestined us for adoption to sonship through Jesus Christ, in accordance with his pleasure and will— to the praise of his glorious grace, which he has freely given us in the One he loves. In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God’s grace that he lavished on us. With all wisdom and understanding, he made known to us the mystery of his will according to his good pleasure, which he purposed in Christ,  to be put into effect when the times reach their fulfillment—to bring unity to all things in heaven and on earth under Christ."
          }
    ]
  },
  resources: {
    title: "Resource Links",
    links: [  
      {
        label: "The Gospel by BibleProject.com",
        url: "https://bibleproject.com/videos/how-to-read-gospel/",
        type: "article"
      },
      {
        label: "'Salvation' Tim Keller Sermon",
        url: "https://podcast.gospelinlife.com/e/salvation-1623793244/",
        type: "video"
      }
    ]
  }
}
},

  {
    id: 5,

    question:
      "#5 Do the Scriptures say HOW Jesus would save the lost?",

    consider: {
      reference: "1 Peter 2:24",
      text:
        "He himself bore our sins in his body on the cross."
    },

    statement:
      "Yes, by dying on the cross for the forgiveness of their sins.",

    explanation:
      "Jesis explains that he must die and rise again for salvation.",

    tabs: {
      biblical: {
        title: "Biblical Evidence",
        verses: [
          {
            reference: "1 Peter 2:24",
            text:
              "By His wounds you have been healed."
          },
          {
            reference: "Hebrews 9:22",
            text:
              "Without the shedding of blood there is no forgiveness."
          },
          {
            reference: "Romans 3:24",
            text:
              "We are justified freely by His grace."
          }
        ]
      },
      resources: {
        title: "Resource Links",
        links: [
          {
          label: "Why Did Jesus Have to Die? (from GotQuestions.org)",
          url: "https://www.gotquestions.org/why-Jesus-die.html",
          type: "article"
          },
          {
            label: "Why Did Jesus Have to Die? (from BibleProject)",
            url: "https://bibleproject.com/articles/why-did-jesus-have-to-die-a-question-worth-unpacking/",
            type: "article"
          },
          {
            label: "The Crucifixion (Tim Keller Sermon)",
            url: "https://podcast.gospelinlife.com/e/the-cross-and-salvation-1623793244/",
            type: "video"
          }
        ]
      }
    }
  },

  {
    id: 6,

    question:
      "#6 Do the Scriptures say what Jesus saves us FOR?",

    consider: {
      reference: "John 3:36",
      text:
        "Whoever believes in the Son has eternal life."
    },

    statement:
      "Yes, so they can have eternal life with God",

    explanation:
      "God saves that which is lost by cleansing, justifying, and reconciling them to Himself through Jesus.",

    tabs: {
      biblical: {
        title: "Biblical Evidence",                                                           
        verses: [
          {
            reference: "1 John 1:9",
            text:
              "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness."
          },
          {
            reference: "Romans 3: 23-25",
            text:
              "for all have sinned and fall short of the glory of God, and all are justified freely by his grace through the redemption that came by Christ Jesus. God presented Christ as a sacrifice of atonement, through the shedding of his blood—to be received by faith. "
          },
          {
            reference: "Romans 6:23",
            text:
              "For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord."
          }
        ]
      },
      resources: {
        title: "Resource Links",
        links: [
          {
            label: "Heaven (Audio sermon by Tim Keller)",
            url: "https://gospelinlife.com/sermon/heaven/",
            type: "article"
          },
          {
            label: "What are the NEw Heavens and New Earth? (from GotQuestions.org)",
            url: "https://www.gotquestions.org/new-heavens-earth.html",
            type: "article"
          }
        ]
      }
    }
  },

  {
    id: 7,

    question:
      "#7 Did the Scriptures say what Jesus saves us FROM?",

    consider: {
      reference: "John 3:36",
      text:
        "Whoever believes in the Son has eternal life; whoever does not obey the Son shall not see life, but the wrath of God remains on him."
    },

    statement:
      "Yes, Scripture the lost are saved from the wrath of God and spiritual death.",

    explanation:
      "Scripture says sin leads to spiritual death, unrighteousness, and separation from God.",
    
    tabs: {
      biblical: {
        title: "Biblical Evidence",

          verses: [
            {
              reference: "Romans 6:23",
              text:
                "For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord. "
            },
            {
              reference: "1 John 1:9",
              text:
                "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness."
            },
            {
              reference: "Ephesians 4:18",
              text:
                "They are darkened in their understanding, alienated from the life of God because of the ignorance that is in them, due to their hardness of heart."
            },
            {
              reference: "Isaiah 59:2",
              text:
                "But your iniquities have made a separation between you and your God, and your sins have hidden his face from you so that he does not hear."
            }
          ]
        },
        resources: {
          title: "Resource Links",
          links: [
            {
              label: "Don't Miss the Point of God's Anger (BibleProject)",
              url: "https://www.youtube.com/watch?v=TeQ1nq_YJD0",
              type: "video"
            },
            {
              label: "Wrath Is Not an Attribute of God",
              url: "https://www.thegospelcoalition.org/article/wrath-not-attribute-god/",
              type: "article"
            },
            {
              label: "Hell (Audio sermon by Tim Keller)",
              url: "https://gospelinlife.com/sermon/hell/",
              type: "article"
            }
          ]
        }
    }
  },

  {
    id: 8,

    question:
      "#8 Does Scripture explain WHO the lost are that Jesus 'came to seek and save'?",
    
      consider: {
        reference: "Romans 3:23-25",
        text:
          "For all have sinned and fall short of the glory of God, and all are justified freely by his grace through the redemption that came by Christ Jesus."
      },

      statement:
        "Yes, Scripture says that 'the lost' includes all people.",

      explanation:
        "Scripture talks about everyone's need for rescue.",
      
      verses: [
        {
          reference:
            "Matthew 9:36",
          text:
            "When he [Jesus] saw the crowds, he had compassion on them, because they were harassed and helpless, like sheep without a shepherd."
        },
        {
          reference:
            "Isaiah 53:6",
          text:
            "We all, like sheep, have gone astray, each of us has turned to our own way; and the Lord has laid on him the iniquity of us all."
        },
        {
          reference:
            "2 Timothy: 2:1-6",
          text:
            "For there is one God, and there is one mediator between God and men, the man Christ Jesus, who gave himself as a ransom for all, which is the testimony given at the proper time."
        },
        {
          reference:
            "Romans 3:11-20",
          text:
            "There is no one righteous, not even one; there is no one who understands there is no one who seeks God. All have turned away, they have together become worthless; there is no one who does good, not even one.” “Their throats are open graves; their tongues practice deceit.” “The poison of vipers is on their lips.” “Their mouths are full of cursing and bitterness.” “Their feet are swift to shed blood; ruin and misery mark their ways, and the way of peace they do not know.” “There is no fear of God before their eyes.” Now we know that whatever the law says, it says to those who are under the law, so that every mouth may be silenced and the whole world held accountable to God. Therefore, no one will be declared righteous in God’s sight by the works of the law; rather, through the law we become conscious of our sin. "
        }
      ]
  },
    

  {
    id: 9,

    question:
      "#9 Do you believe Jesus came to 'seek and save you personally?'",

    consider: {
      reference: "2 Peter 3:9",
      text:
        "He is patient, not wanting anyone to perish."
    },

    statement:
      "Yes, I believe Jesus came to save me.",

    explanation:
      "Scripture points to Jesus as the way to salvation.",

    tabs: {
      biblical: {
        title: "Biblical Evidence",
        verses: [
          {
            reference: "1 John 1:8",
            text:
              "If we say we have no sin, we deceive ourselves, and the truth is not in us."
          },
          {
            reference: "Revelation 3:20",
            text:
              "I stand at the door and knock."
          },
          {
            reference: "John 10:9",
            text:
              "I am the door. Whoever enters through me will be saved."
          }
        ]
  },
  resources: {
    title: "Resource Links",
    links: [
      {
      label: "Beholding the Glory of God (Audio sermon Tim Keller)",
      url: "https://www.youtube.com/watch?v=krxcqH522uo",
      type: "video"
      }
    ]
  }
    }
  },

  {
    id: 10,

    question:
      "#10 Are you ready to say yes to Jesus?",

    consider: {
      reference: "Acts 2:38",
      text:
        "And Peter said to them, 'Repent and be baptized every one of you in the name of Jesus Christ for the forgiveness of your sins, and you will receive the gift of the Holy Spirit.'"
    },

    statement:
      "Yes, I am ready to say yes to Jesus!",

    explanation:
      "God invites you into relationship with him when you are ready to receive and believe in Jesus Christ.",

    verses: [
      {
        reference: "Romans 10:9",
        text:
          "If you confess with your mouth that Jesus is Lord, you will be saved."
      },
      {
        reference: "3 Peter:9",
        text:
          "The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance."
      },
      {
        reference: "Mark 16:16",
        text:
          "Whoever believes and is baptized will be saved, but whoever does not believe will be condemned. "
      }
    ]
  }
];
