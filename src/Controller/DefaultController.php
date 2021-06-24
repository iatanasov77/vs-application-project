<?php namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;

class DefaultController extends AbstractController
{
    public function index()
    {
        $redirectUrl    = $this->generateUrl( 'vs_cms_pages_index' );
        
        return new RedirectResponse( $redirectUrl, 307 );
    }
}
