<?php namespace App;

use Symfony\Bundle\FrameworkBundle\Kernel\MicroKernelTrait;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;
use Symfony\Component\HttpKernel\Kernel as BaseKernel;
use Symfony\Component\Routing\Loader\Configurator\RoutingConfigurator;

class AdminPanelKernel extends BaseKernel
{
    use MicroKernelTrait;
    
    private const APP_ID = 'admin-panel';
    
    public function getVarDir()
    {
        $dirVar = $this->getProjectDir() . '/var';
        if ( isset( $_ENV['DIR_VAR'] ) ) {
            $dirVar = $_ENV['DIR_VAR'];
        }
        
        return $dirVar;
    }
    
    public function getCacheDir()
    {
        return $this->getVarDir() . '/' . self::APP_ID . '/cache/' . $this->environment;
        //return parent::getCacheDir();
    }
    
    public function getLogDir()
    {
        return $this->getVarDir() . '/' . self::APP_ID . '/log';
        //return parent::getLogDir();
    }
    
    protected function configureContainer(ContainerConfigurator $container): void
    {
        $container->parameters()->set( 'vs_application.session_save_path', $this->getVarDir() . '/sessions/' );
        
        $container->import('../config/{packages}/*.yaml');
        $container->import('../config/{packages}/'.$this->environment.'/*.yaml');
        
        if (is_file(\dirname(__DIR__).'/config/services.yaml')) {
            $container->import('../config/services.yaml');
            $container->import('../config/{services}_'.$this->environment.'.yaml');
        } else {
            $container->import('../config/{services}.php');
        }
    }
    
    protected function configureRoutes(RoutingConfigurator $routes): void
    {
        $routes->import('../config/{routes}/'.$this->environment.'/*.yaml');
        $routes->import('../config/{routes}/*.yaml');
        
        if (is_file(\dirname(__DIR__).'/config/routes.yaml')) {
            $routes->import('../config/routes.yaml');
        } else {
            $routes->import('../config/{routes}.php');
        }
    }
}
