import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Card } from './components/Card';
import { ProgressBar } from './components/ProgressBar';
import { Controls } from './components/Controls';
import { Settings } from './components/Settings';
import { useHiraganaGame } from './hooks/useHiraganaGame';

function App() {
  const {
    currentCard,
    currentIndex,
    isPlaying,
    mode,
    speed,
    actions
  } = useHiraganaGame();

  return (
    <Layout>
      <Header />

      <main className="w-full max-w-md relative mb-8">
        {/* Timer Progress Bar */}
        <ProgressBar
          duration={speed}
          isPlaying={isPlaying}
          resetKey={currentIndex} // Reset animation on card change
        />

        <Card item={currentCard} />
      </main>

      <section className="w-full max-w-md space-y-6">
        <Settings
          mode={mode}
          speed={speed}
          onModeChange={actions.setMode}
          onSpeedChange={actions.setSpeed}
        />

        <Controls
          isPlaying={isPlaying}
          onNext={actions.nextCard}
          onPrev={actions.prevCard}
          onTogglePlay={actions.togglePlay}
        />
      </section>
    </Layout>
  );
}

export default App;
