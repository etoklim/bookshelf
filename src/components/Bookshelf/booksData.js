import PrideCover from "../../assets/books/austen_pride/austen_pride.jpg";
import PrideBook from "../../assets/books/austen_pride/austen_pride.epub";
import AliceCover from "../../assets/books/carroll_alice/carroll_alice.jpg";
import AliceBook from "../../assets/books/carroll_alice/carroll_alice.epub";
import FrankensteinCover from "../../assets/books/shelley_frankenstein/shelley_frankenstein.jpg";
import FrankensteinBook from "../../assets/books/shelley_frankenstein/shelley_frankenstein.epub";
import SawyerCover from "../../assets/books/twain_sawyer/twain_sawyer.jpg";
import SawyerBook from "../../assets/books/twain_sawyer/twain_sawyer.epub";
import CallCover from "../../assets/books/london_call/london_call.jpg";
import CallBook from "../../assets/books/london_call/london_call.epub";
import TreasureCover from "../../assets/books/stevenson_treasure/stevenson_treasure.jpg";
import TreasureBook from "../../assets/books/stevenson_treasure/stevenson_treasure.epub";
import FinnCover from "../../assets/books/twain_finn/twain_finn.jpeg";
import FinnBook from "../../assets/books/twain_finn/twain_finn.epub";
import HolmesCover from "../../assets/books/doyle_holmes/doyle_holmes.jpg";
import HolmesBook from "../../assets/books/doyle_holmes/doyle_holmes.epub";
import EmmaCover from "../../assets/books/austen_emma/austen_emma.jpg";
import EmmaBook from "../../assets/books/austen_emma/austen_emma.epub";

const booksData = [
  {
    author: "Lewis Carroll",
    title: "Alice's Adventures in Wonderland",
    textColor: "black",
    backgroundColor: "#90c8ed",
    cover: AliceCover,
    epub: AliceBook,
  },
  {
    author: "Mary Wollstonecraft Shelley",
    title: "Frankenstein",
    textColor: "black",
    backgroundColor: "#f4f4f4",
    cover: FrankensteinCover,
    epub: FrankensteinBook,
  },
  {
    author: "Jack London",
    title: "The Call of the Wild",
    textColor: "#c9110d",
    backgroundColor: "#98869e",
    cover: CallCover,
    epub: CallBook,
  },
  {
    author: "Robert Louis Stevenson",
    title: "Treasure Island",
    textColor: "#68d170",
    backgroundColor: "#091a24",
    cover: TreasureCover,
    epub: TreasureBook,
  },
  {
    author: "Mark Twain",
    title: "The Adventures of Tom Sawyer",
    textColor: "white",
    backgroundColor: "#021c29",
    cover: SawyerCover,
    epub: SawyerBook,
  },
  {
    author: "Mark Twain",
    title: "Adventures of Huckleberry Finn",
    textColor: "#ec6726",
    backgroundColor: "#003545",
    cover: FinnCover,
    epub: FinnBook,
  },
  {
    author: "Arthur Conan Doyle",
    title: "The Adventures of Sherlock Holmes",
    textColor: "white",
    backgroundColor: "#0d0502",
    cover: HolmesCover,
    epub: HolmesBook,
  },
  {
    author: "Jane Austen",
    title: "Emma",
    textColor: "white",
    backgroundColor: "#05836b",
    cover: EmmaCover,
    epub: EmmaBook,
  },
  {
    author: "Jane Austen",
    title: "Pride and Prejudice",
    textColor: "white",
    backgroundColor: "#438bb3",
    cover: PrideCover,
    epub: PrideBook,
  },
];

export default booksData;
