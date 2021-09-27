import React from "react";
import "./Marketplace.css";
import {
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Button,
  ButtonGroup,
  PopoverFooter,
} from "@chakra-ui/react";

function Marketplace() {
  return (
    <>
      <Flex
        width="100wh"
        height="100vh"
        backgroundImage="url('../images/background.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <div className="main">
          <Popover>
            <PopoverTrigger>
              <Button colorScheme="#367e7f">Upload Photo</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />

              <PopoverBody>Item(s) Description:</PopoverBody>
              <PopoverBody>Contact Information:</PopoverBody>
              <PopoverFooter>
                <ButtonGroup size="sm">
                  <Button colorScheme="teal">Upload Photo</Button>
                </ButtonGroup>
              </PopoverFooter>
            </PopoverContent>
          </Popover>

          <ul className="cards">
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img
                    src="https://picsum.photos/500/300/?image=491"
                    alt="tools"
                  ></img>
                </div>
                <div className="card_content">
                  <h2 className="card_title">Assorted Tools</h2>
                  <p className="card_text">
                    I can drop off. Text Bob at 512-895-5896
                  </p>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img
                    src="https://picsum.photos/500/300/?image=23"
                    alt="silverware set"
                  ></img>
                </div>
                <div className="card_content">
                  <h2 className="card_title">56 piece silverware set</h2>
                  <p className="card_text">
                    Drop-off available. Call or text Moira at 830-385-4163
                  </p>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img
                    src="https://picsum.photos/500/300/?image=1060"
                    alt="coffeemaker"
                  ></img>
                </div>
                <div className="card_content">
                  <h2 className="card_title">Full coffeemaker set</h2>
                  <p className="card_text">
                    I can drop off anytime. Please call 935-859-5928
                  </p>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img
                    src="https://picsum.photos/500/300/?image=1080"
                    alt="strawberries"
                  ></img>
                </div>
                <div className="card_content">
                  <h2 className="card_title">Fresh Strawberries</h2>
                  <p className="card_text">
                    I can drop off anywhere in or around Austin. Text
                    713-589-1472
                  </p>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img
                    src="https://picsum.photos/500/300/?image=119"
                    alt="computer"
                  ></img>
                </div>
                <div className="card_content">
                  <h2 className="card_title">MacBook Pro</h2>
                  <p className="card_text">
                    Used in box. Call or text 512-852-3261
                  </p>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img
                    src="https://picsum.photos/500/300/?image=535"
                    alt="sweaters"
                  ></img>
                </div>
                <div className="card_content">
                  <h2 className="card_title">Assorted med sweaters</h2>
                  <p className="card_text">
                    I can deliver anywhere. Call 281-867-5309
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Flex>
    </>
  );
}
export default Marketplace;
