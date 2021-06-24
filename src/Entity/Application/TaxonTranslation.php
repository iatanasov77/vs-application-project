<?php namespace App\Entity\Application;

use Doctrine\ORM\Mapping as ORM;
use VS\ApplicationBundle\Model\TaxonTranslation as BaseTaxonTranslation;

/**
 * @ORM\Entity
 * @ORM\Table(name="VSAPP_TaxonTranslations")
 */
class TaxonTranslation extends BaseTaxonTranslation
{
   
}
