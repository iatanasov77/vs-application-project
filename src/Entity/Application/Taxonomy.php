<?php namespace App\Entity\Application;

use Doctrine\ORM\Mapping as ORM;
use VS\ApplicationBundle\Model\Taxonomy as BaseTaxonomy;

/**
 * @ORM\Table(name="VSAPP_Taxonomy")
 * @ORM\Entity
 */
class Taxonomy extends BaseTaxonomy
{
    
}
