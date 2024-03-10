import Greetings from "./components/Greetings"
import ProductCard from "./components/ProductCard"


function App() {
  const styles = {
      grid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "64px",
      padding: "16px",
    },

    container: {
      
    }
  }
 
  return (
    <div style={styles.container}>
        <Greetings />
      <div style={styles.grid}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

      </div>
    </div>
  )
}

export default App
