import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/lib/i18n';

const Header = () => {
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation(language);
  
  const isActive = (path: string) => location.pathname === path;
  
  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
  };

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
              <Icon name="Play" size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-bold">VIDEO<span className="text-primary">HUB</span></h1>
          </Link>
          
          <div className="flex items-center gap-2">
            <nav className="hidden md:flex items-center gap-2">
              <Link to="/popular">
                <Button 
                  variant={isActive('/popular') ? 'default' : 'ghost'}
                  className={isActive('/popular') ? 'bg-primary hover:bg-primary/90' : 'hover:bg-secondary'}
                >
                  <Icon name="TrendingUp" size={18} className="mr-2" />
                  {t('header.popular')}
                </Button>
              </Link>
              <Link to="/">
                <Button 
                  variant={isActive('/') ? 'default' : 'ghost'}
                  className={isActive('/') ? 'bg-primary hover:bg-primary/90' : 'hover:bg-secondary'}
                >
                  <Icon name="Shuffle" size={18} className="mr-2" />
                  {t('header.random')}
                </Button>
              </Link>
              <Link to="/new">
                <Button 
                  variant={isActive('/new') ? 'default' : 'ghost'}
                  className={isActive('/new') ? 'bg-primary hover:bg-primary/90' : 'hover:bg-secondary'}
                >
                  <Icon name="Sparkles" size={18} className="mr-2" />
                  {t('header.new')}
                </Button>
              </Link>
              <Link to="/tags">
                <Button 
                  variant={isActive('/tags') ? 'default' : 'ghost'}
                  className={isActive('/tags') ? 'bg-primary hover:bg-primary/90' : 'hover:bg-secondary'}
                >
                  <Icon name="Tags" size={18} className="mr-2" />
                  {t('header.tags')}
                </Button>
              </Link>
              <Link to="/analytics">
                <Button 
                  variant={isActive('/analytics') ? 'default' : 'ghost'}
                  className={isActive('/analytics') ? 'bg-primary hover:bg-primary/90' : 'hover:bg-secondary'}
                >
                  <Icon name="BarChart3" size={18} className="mr-2" />
                  {t('header.analytics')}
                </Button>
              </Link>
            </nav>

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hover:bg-secondary"
            >
              <Icon name="Languages" size={18} className="mr-2" />
              {language.toUpperCase()}
            </Button>

            <button className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;