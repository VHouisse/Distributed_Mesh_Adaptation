# 1. Contexte Général et Motivations

## 1.1 Le défi de la simulation numérique et l'essence de l'adaptation de maillage
Dans le domaine de l'ingénierie et de la science, la modélisation et la simulation numérique jouent un rôle prépondérant pour comprendre et prédire le comportement de phénomènes physiques complexes. Que ce soit pour simuler les écoulements d'air autour d'une aile d'avion, la propagation de la chaleur dans un réacteur, ou la déformation de structures sous contrainte, atteindre une haute-fidélité dans ces simulations est un défi fondamental.

Résoudre numériquement les équations qui régissent ces phénomènes complexes impose une discrétisation préalable de l'espace et du temps. Pour cela, les maillages sont fondamentaux car ils permettent de décomposer la géométrie complexe induite par le problème en un ensemble fini d'éléments. Cette discrétisation, nécessaire, permet d'approximer des grandeurs physiques et donc de résoudre les équations sous jacente au problème de manière computationnelle.

Bien que les maillages soient essentiels, leur conception statique révèle certaines limites face à la compléxité des phénomènes physiques, notamment dans l'étude de la dynamique des fluides. Par exemple, capturer l'ensemble de l'information issue des écoulements turbulents avec un maillage statique est presque impossible. En effet, ces phénomènes se caractérisent par des gradients physiques très intenses et des structures de mouvement très complexes dans des zones très spécifiques du domaine (couche limite, sillage ...). 

L'approche d'un maillage statique et isotrope n'est donc pas optimale; il risque d'être insuffisamment raffiné là où une résolution très précise est cruciale et trop dense dans des zones moins critiques de l'écoulement. En plus de la perte d'information, ce déséquilibre entraine une surchage computationnelle injustifiée dans les régions où une moindre précision serait suffisante.

Pour surmonter ces défis et optimiser l'efficatité des simulations numériques haute-fidélité, l'adaptation de maillage anisotrope est primordiale. Cette approche dynamique permet un ajustement intelligent de la densité et de l'orientation des éléments du maillage en fonction des caractéristiques de la solution et des erreurs d'approximations commises. L'adaptation anisotropique permet d'affiner la résolution en alignant la forme des éléments du maillage avec les directions des phénomènes physiques prédominants. En concentrant précisément les ressources de calcul là où elles sont nécessaires elle maximise la précision et minimise les coûts computationnels.

Atteindre cette haute fidélité à l'échelle des applications industrielles modernes tel que celles de l'industrie de l'aéronautique exige de recourrir au calcul massivement parallèle. En effet, le volume de données et la compléxité des calculs sont colossaux et un maillage typique pour une simulation CFD peut compter des dizaines, voire des centaines de millions d'éléments. 

Garantir l'éfficatité des calculs sur un tel volume de données ne peut se faire que via l'exploitation du calcul parallèle. Cela implique de distribuer le maillage et les opérations de calcul intrinsèques, tel que les opérations d'adaptation, sur plusieurs coeurs de calcul différents. Cette dimension parallèle induit une surcouche de complexité ; il faut garantir une répartition équitable du temps de calcul et une communication efficace et minime entre chaque processeur ainsi que la conservation de la cohérence des calculs. C'est dans ce contexte de haute performance que les solutions d'adaptation de maillage doivent s'inscrire pour être réellement utile aux applications industrielles.

## 1.2 Contexte Industriel et Objectifs

Le présent travail de thèse s'inscrit au sein d'une collaboration entre Airbus et le Cerfacs, dans le but de répondre à des besoins industiels concrets en dynamique des fluides numérique par le biais de la recherche appliquée. Au coeur de cette initiative se trouve CODA (Code ONERA DLR AIRBUS ), un outil de simulation numérique pour la dynamique des fluides massivement parallèle gérant des calculs de très grande envergure.
L'objectif principal de cette thèse est de développer un cadre d'adaptation de maillage anisotrope parallèle pour CODA. Le but ultime est de réduire les délais de conception et d'élargir le champ d'exploration de design des aviosn dans les bureaux d'études d'Airbus. 


<!-- Pour y parvenir, une part essentielle de la thèse consistera à identifier et à implémenter des métriques anisotropes adaptées à la capture de phénomènes clés comme les couches limites et les chocs transsoniques, ainsi que des métriques "goal-based" exploitant la sensibilité adjointe. La mise en œuvre de ce workflow d'adaptation distribuée débutera par une version en ligne de commande, puis évoluera vers un couplage direct avec le module FSDM de CODA via l'API kalpaTARU C. L'efficacité du workflow sera validée à travers des applications concrètes sur des configurations d'avions représentatives (LAGOON, DPW). -->


## 1.3 Feuille de Route 

Ce MdBook a pour vocation de présenter l'intégralité des avancées et des résultats obtenus au cours de ma thèse de doctorat. Au fil des chapitres, il retracera l'évolution continue de ma thèse, de mes explorations intiailes aux résultats les plus récents. Chaque section abordera un aspect fondamental de ma recherche : l'acquisition de connaissances théoriques relatives à l'adaptation de maillage anisotropique, l'environnement de développement et les outils utilisés ainsi que l'ensemble de mes contributions scientifiques. L'objectif est de fournir une vision claire et structurée de l'état d'avancement de ma recherche, des défis rencontrés et des solutions développées tout au long de ces trois années.

<br><br><br>
<div style="display: flex; justify-content: space-between; align-items: flex-start;">
    <img src="../images/Airbus.png" alt="Image à gauche" style="width: 30%;">
    <img src="../images//CERFACS.png" alt="Image à droite" style="width: 30%;">
</div>
