<?php namespace App\Entity\Application;

use Doctrine\ORM\Mapping as ORM;
use VS\ApplicationBundle\Model\Taxon as BaseTaxon;

use Sylius\Component\Taxonomy\Model\TaxonTranslationInterface;



/**
 * @ORM\Entity
 * @ORM\Table(name="VSAPP_Taxons")
 *
 */
class Taxon extends BaseTaxon
{
    protected function createTranslation(): TaxonTranslationInterface
    {
        $translation   = new TaxonTranslation();
        $translation->setTranslatable( $this );
        
        return $translation;
    }
}
